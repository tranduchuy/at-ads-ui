import { Component, OnInit } from '@angular/core';
import { SessionService } from 'app/shared/services/session.service';
import { BanIpsService } from '../ban-ips.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ILoginSuccess } from 'app/authentication/login/models/i-login-success';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

@Component({
  selector: 'app-anonymous-browser',
  templateUrl: './anonymous-browser.component.html',
  styleUrls: ['./anonymous-browser.component.scss']
})
export class AnonymousBrowserComponent extends PageBaseComponent implements OnInit {

  isProcessing: boolean = true;
  checked: boolean;

  constructor(
    public sessionService: SessionService,
    private _banIpsService: BanIpsService,
    private _fuseProgresBarService: FuseProgressBarService,
    private _dialogService: DialogService,
    private _router: Router,
    private _fuseSplashScreenService: FuseSplashScreenService
  ) {
    super();
  }

  ngOnInit() {
    this.isProcessing = true;
    this._fuseProgresBarService.show();
    const sub = this.sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.getAccountDetail(accountId);
        }
      });
    this.subscriptions.push(sub);

  }

  getAccountDetail(accountId: string) {
    const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
      .subscribe(
        (res) => {

          if (res.data.adsAccount.isConnected) {
            this._fuseProgresBarService.hide();
            this.getBlockingAnonymousBrowserSetting();
          }
          else {
            this._fuseProgresBarService.hide();
            this._dialogService._openInfoDialog(
                'Tài khoản Google Ads này chưa được chấp nhận quyền quản lý hệ thống. Vui lòng thực hiện theo hướng dẫn',
                'tại đây',
                '/tro-giup/fI10j2DfAFexKoOQ'
              );
            this._router.navigateByUrl('/danh-sach-tai-khoan');
          }

        },
        (error: HttpErrorResponse) => {
          this._fuseProgresBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this._router.navigateByUrl('/danh-sach-tai-khoan');
        }
      );
    this.subscriptions.push(accountDetailSub);
  }

  getBlockingAnonymousBrowserSetting() {
    this.isProcessing = true;
    this._fuseProgresBarService.show();
    const sub = this._banIpsService.getBlockingIPSettings()
      .subscribe(res => {
        this._fuseProgresBarService.hide();
        this._fuseSplashScreenService.hide();
        this.checked = res.data.setting.blockByPrivateBrowser;
        this.isProcessing = false;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgresBarService.hide();
          this._fuseSplashScreenService.hide();

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

  checkSetting(event) {
    this.checked = event.checked;
  }

  setBlockingAnonymousBrowser() {
    this.isProcessing = true;
    this._fuseProgresBarService.show();

    const sub = this._banIpsService.setBlockingAnonymousBrowser({ blockByPrivate: this.checked })
      .subscribe(
        (res: ILoginSuccess) => {

          this.getBlockingAnonymousBrowserSetting();

          this._fuseProgresBarService.hide();
          this._dialogService._openSuccessDialog(res);
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgresBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

}
