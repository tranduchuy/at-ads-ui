import { Component, OnInit } from '@angular/core';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';
import { Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';

@Component({
  selector: 'app-auto-ban-ip',
  templateUrl: './auto-ban-ip.component.html',
  styleUrls: ['./auto-ban-ip.component.scss']
})
export class AutoBanIPComponent extends PageBaseComponent implements OnInit {

  isProcessing: boolean = false;
  selectedMaxClick: number;
  selectedAutoRemove: boolean;

  itemsSource = {
    maxClick: [
      {
        text: 'Không kích hoạt',
        value: -1
      },
      {
        text: '1 lần',
        value: 1
      },
      {
        text: '2 lần (được đề nghị)',
        value: 2
      },
      {
        text: '3 lần',
        value: 3
      },
      {
        text: '4 lần',
        value: 4
      },
      {
        text: '5 lần',
        value: 5
      },
    ],
    autoRemove: [
      {
        text: 'Không xóa (được đề nghị)',
        value: false
      },
      {
        text: 'Cho phép xóa',
        value: true
      },
    ]
  };

  constructor(
    private _banIpsService: BanIpsService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _sessionService: SessionService,
    public _dialogService: DialogService,
    private _router: Router
  ) {
    super();
  }

  ngOnInit(): void {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {

        if (accountId) {
          const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe(
              (res) => {

                if (res.data.adsAccount.isConnected) {
                  this._fuseProgressiveBarService.hide();
                  this.getBlockingIPSettting();
                }
                else {
                  this._fuseProgressiveBarService.hide();
                  this._dialogService._openInfoDialog('Tài khoản AdWords chưa được chấp nhận quyền quản lý hệ thống');
                  this._router.navigateByUrl('/danh-sach-tai-khoan');
                }

              },
              (error: HttpErrorResponse) => {
                this._fuseProgressiveBarService.hide();
                this._dialogService._openErrorDialog(error.error);
                this._router.navigateByUrl('/danh-sach-tai-khoan');
              }
            );
          this.subscriptions.push(accountDetailSub);
        }

      });
    this.subscriptions.push(sub);
  }

  getBlockingIPSettting() {
    this._fuseProgressiveBarService.show();

    const getSettingsSub = this._banIpsService.getBlockingIPSettings()
      .subscribe(res => {
        this._fuseProgressiveBarService.hide();

        this.selectedMaxClick = res.data.setting.autoBlockByMaxClick;
        this.selectedAutoRemove = res.data.setting.autoRemoveBlocking;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(getSettingsSub);
  }

  setAutoBlockingIP() {
    const params = this.generateAutoBlockingIpParams();

    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._banIpsService.autoBlockingIP(params).subscribe((res: ILoginSuccess) => {

      this.getBlockingIPSettting();

      setTimeout(() => {
        this._dialogService._openSuccessDialog(res);
        this._fuseProgressiveBarService.hide();
        this.isProcessing = false;
      }, 0);
    },
      (error: HttpErrorResponse) => {

        if (error.error.messages) {
          this._dialogService._openErrorDialog(error.error);
        }

        this._fuseProgressiveBarService.hide();
        this.isProcessing = false;
      }
    );
    this.subscriptions.push(sub);
  }

  private generateAutoBlockingIpParams(): any {
    const params = {
      maxClick: this.selectedMaxClick,
      autoRemove: this.selectedAutoRemove
    };

    return params;
  }
}
