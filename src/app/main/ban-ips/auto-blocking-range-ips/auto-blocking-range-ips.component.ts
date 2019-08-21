import { Component, OnInit } from '@angular/core';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-blocking-range-ips',
  templateUrl: './auto-blocking-range-ips.component.html',
  styleUrls: ['./auto-blocking-range-ips.component.scss']
})
export class AutoBlockingRangeIpsComponent extends PageBaseComponent implements OnInit {

  isProcessing: boolean = false;
  classC: boolean;
  classD: boolean;

  constructor(private _banIpsService: BanIpsService,
    public _sessionService: SessionService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _router: Router
  ) {
    super();
  }

  itemsSource = {
    classC: [
      {
        text: 'Không kích hoạt (được đề nghị)',
        value: false
      },
      {
        text: 'Kích hoạt',
        value: true
      }
    ],
    classD: [
      {
        text: 'Không kích hoạt (được đề nghị)',
        value: false
      },
      {
        text: 'Kích hoạt',
        value: true
      }
    ]
  };

  ngOnInit(): void {
    this._fuseProgressiveBarService.show();
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe(
              (res) => {

                if (res.data.adsAccount.isConnected) {
                  this._fuseProgressiveBarService.hide();
                  this.getAutoBLockingIPRangeSetting();
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

  getAutoBLockingIPRangeSetting() {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._banIpsService.getBlockingIPSettings()
      .subscribe(res => {
        this._fuseProgressiveBarService.hide();

        this.classC = res.data.setting.autoBlackListIpRanges.classC;
        this.classD = res.data.setting.autoBlackListIpRanges.classD;

        this.isProcessing = false;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();

          if (error.status === 404) {
            this._dialogService._openInfoDialog(
              'Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ',
              'tại đây',
              '/gan-tracking/chien-dich'
            );
          }
          else this._dialogService._openErrorDialog(error.error);

        });
    this.subscriptions.push(sub);
  }

  setAutoBlockingIPRange() {
    this.isProcessing = true;
    const params = this.generateAutoBlockingIPRangeParams();
    this._fuseProgressiveBarService.show();

    const sub = this._banIpsService.autoBlockingRangeIP(params)
      .subscribe((res: ILoginSuccess) => {

        this.getAutoBLockingIPRangeSetting();

        setTimeout(() => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openSuccessDialog(res);
          this.isProcessing = false;
        }, 0);
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  private generateAutoBlockingIPRangeParams(): any {
    const params = {
      classC: this.classC,
      classD: this.classD
    }

    return params;
  }

}
