import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from 'app/shared/components/base/editable-form-base.component';
import { Validators } from '@angular/forms';
import { SessionService } from 'app/shared/services/session.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from 'app/authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

@Component({
  selector: 'app-whitelist-ip',
  templateUrl: './whitelist-ip.component.html',
  styleUrls: ['./whitelist-ip.component.scss']
})
export class WhitelistIpComponent extends EditableFormBaseComponent implements OnInit {

  isProcessing: boolean = true;
  whiteList = [];

  constructor(
    public sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _banIpsService: BanIpsService,
    private _router: Router,
    private _fuseSplashScreenService: FuseSplashScreenService
  ) {
    super();
  }

  ngOnInit() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    this.initForm();
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
          this._fuseProgressBarService.hide();

          if (res.data.adsAccount.isConnected)
            this.getWhitelistIPs();
          else {
            this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
            this._router.navigateByUrl('/danh-sach-tai-khoan');
          }

        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this._router.navigateByUrl('/danh-sach-tai-khoan');
        }
      );
    this.subscriptions.push(accountDetailSub);
  }

  getWhitelistIPs() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._banIpsService.getBlockingIPSettings()
      .subscribe(res => {
        this._fuseProgressBarService.hide();
        this._fuseSplashScreenService.hide();

        this.whiteList = Array.from(new Set(res.data.setting.customWhiteList));

        this.form.patchValue({
          whitelistIPs: this.getNormalizedWhiteList(Array.from(new Set(res.data.setting.customWhiteList)))
        })

        this.isProcessing = false;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
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

  getNormalizedWhiteList(list: any) {
    return (list || []).map(item => {

      if (item.includes('.0.0/16'))
        return item.replace('.0.0/16', '.*.*');

      if (item.includes('.0/24'))
        return item.replace('.0/24', '.*');

      return item;
    }).join('\n');
  }

  onSubmitForm() {
    this.onSubmit();
  }

  initForm() {
    this.form = this.fb.group({
      whitelistIPs: ['', [this.validatorService.checkWhiteListIP]]
    });
  }

  post() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const param = this.generatePostObject();
    const sub = this._banIpsService.updateWhiteList(param)
      .subscribe(
        (res: ILoginSuccess) => {

          this.getWhitelistIPs();

          this._fuseProgressBarService.hide();
          this._dialogService._openSuccessDialog(res);
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();

          if (error.status === 409) {
            this._dialogService._openErrorDialog({
              messages: [`${error.error.data.ips.join(', ')} đã nằm trong blacklist.`]
            });
          }
          else this._dialogService._openErrorDialog(error.error);

          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  generatePostObject() {
    const param = {
      ips: { ...this.form.value }.whitelistIPs.split('\n')
    }

    param.ips = param.ips.filter((ip: string) => ip);

    return param;
  }

}
