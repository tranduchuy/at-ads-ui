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

@Component({
  selector: 'app-whitelist-ip',
  templateUrl: './whitelist-ip.component.html',
  styleUrls: ['./whitelist-ip.component.scss']
})
export class WhitelistIpComponent extends EditableFormBaseComponent implements OnInit {

  isProcessing: boolean = false;

  constructor(
    public _sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _banIpsService: BanIpsService,
    private _router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.initForm();
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
            .subscribe(
              (res) => {

                if (res.data.adsAccount.isConnected)
                  this._fuseProgressBarService.hide();

                else {
                  this._fuseProgressBarService.hide();
                  this._dialogService._openInfoDialog('Tài khoản AdWords chưa được chấp nhận quyền quản lý hệ thống');
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
      });
    this.subscriptions.push(sub);
  }

  onSubmitForm() {
    this.onSubmit();
  }

  initForm() {
    this.form = this.fb.group({
      whitelistIPs: ['', [Validators.required, this.validatorService.checkListIP]]
    });
  }

  post() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const param = this.generatePostObject();
    const sub = this._banIpsService.updateWhiteList(param)
      .subscribe(
        (res: ILoginSuccess) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openSuccessDialog(res);
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  generatePostObject() {
    const param = {
      ips: { ...this.form.value }.whitelistIPs.split(/\r?\n/)
    }

    return param;
  }

}
