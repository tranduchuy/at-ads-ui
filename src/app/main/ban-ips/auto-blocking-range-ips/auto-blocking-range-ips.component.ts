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

  isProcessing: boolean = true;
  classC: number;
  classD: number;

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
        value: 1
      },
      {
        text: 'Kích hoạt',
        value: 2
      }
    ],
    classD: [
      {
        text: 'Không kích hoạt (được đề nghị)',
        value: 1
      },
      {
        text: 'Kích hoạt',
        value: 2
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
                  this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
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

        this.classC = res.data.setting.autoBlackListIpRanges.classC === false ? 1 : 2;
        this.classD = res.data.setting.autoBlackListIpRanges.classD === false ? 1 : 2;

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

          this.classC = -1;
          this.classD = -1;
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
      classC: this.classC === 1 ? false : true,
      classD: this.classD === 1 ? false : true
    }

    return params;
  }

}
