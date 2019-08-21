import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';

import { BanIpsService } from '../ban-ips.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ILoginSuccess } from 'app/authentication/login/models/i-login-success';
import { SessionService } from '../../../shared/services/session.service';
import { Router } from '@angular/router';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

@Component({
  selector: 'app-ban-an-ip',
  templateUrl: './ban-an-ip.component.html',
  styleUrls: ['./ban-an-ip.component.scss']
})
export class BanAnIPComponent extends EditableFormBaseComponent implements OnInit {

  blockedIPs: string[];
  hasBlockedIP: boolean;
  isProcessing: boolean = false;

  constructor(
    private _banIpsService: BanIpsService,
    public _sessionService: SessionService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _router: Router,
  ) {
    super();
    this.blockedIPs = [];
  }

  ngOnInit(): void {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();
    this.hasBlockedIP = false;
    this.initForm();

    const sub = this._sessionService.getAccountId()
      .subscribe(
        (accountId: string) => {

          if (accountId) {
            const accountDetailSub = this._banIpsService.getAdwordsAccountDetail(accountId)
              .subscribe(
                (res) => {

                  if (res.data.adsAccount.isConnected) {
                    const blockedIPsSub = this._banIpsService.getBlockedSampleIP()
                      .subscribe(res => {
                        this.blockedIPs = res.data.ips;

                        if (this.blockedIPs.length > 0)
                          this.hasBlockedIP = true;
                        else this.hasBlockedIP = false;

                        this._fuseProgressiveBarService.hide();
                        this.isProcessing = false;
                      },
                        (error: HttpErrorResponse) => {
                          this._fuseProgressiveBarService.hide();

                          if (error.status === 404) {
                            this._dialogService._openInfoDialog('Tài khoản hiện chưa có chiến dịch nào được gắn tracking! Vui lòng gắn tracking cho các chiến dịch.');
                          }

                          this.hasBlockedIP = false;
                        });
                    this.subscriptions.push(blockedIPsSub);
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
                });
            this.subscriptions.push(accountDetailSub);
          }

        });
    this.subscriptions.push(sub);
  }

  onSubmitForm(): void {
    this.onSubmit();
  }

  initForm(): void {
    this.form = this.fb.group({
      bannedIP: ['', [Validators.required, this.validatorService.checkIP]]
    });
  }

  private generateBlockSapmleIPParams(): any {
    const params = {
      ip: { ...this.form.value }.bannedIP
    };

    return params;
  }

  post(): void {
    const params = this.generateBlockSapmleIPParams();
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._banIpsService.blockSampleIP(params)
      .subscribe(
        (res: ILoginSuccess) => {
          this._fuseProgressiveBarService.hide();
          this.blockedIPs[0] = params.ip;
          this.hasBlockedIP = true;

          setTimeout(() => {
            this._dialogService._openSuccessDialog(res);
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

  private generateUnblockeSampleIPParmas(): any {
    const parmas = {
      ip: this.blockedIPs[0]
    }
    return parmas;
  }

  unblockSampleIP() {
    this._dialogService._openConfirmDialog('Mở chặn IP này?')
      .subscribe(
        (result: boolean) => {

          if (result) {
            const params = this.generateUnblockeSampleIPParmas();
            this.isProcessing = true;
            this._fuseProgressiveBarService.show();
            const sub = this._banIpsService.unblockSampleIP(params)
              .subscribe((res: ILoginSuccess) => {
                this._fuseProgressiveBarService.hide();
                this.blockedIPs = [];
                this.hasBlockedIP = false;
                this._dialogService._openSuccessDialog(res);
                this.isProcessing = false;
              },
                (error: HttpErrorResponse) => {
                  this._fuseProgressiveBarService.hide();
                  this._dialogService._openErrorDialog(error.error);
                  this.isProcessing = false;
                })
            this.subscriptions.push(sub);
          }

        })
  }
}