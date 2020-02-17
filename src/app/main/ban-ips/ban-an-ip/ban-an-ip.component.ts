import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { BanIpsService } from '../ban-ips.service';
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

  blockedIPs: string[] = [];
  hasBlockedIP: boolean;
  isProcessing: boolean;

  constructor(
    private _banIpsService: BanIpsService,
    public sessionService: SessionService,
    private _fuseProgresBarService: FuseProgressBarService,
    private _router: Router,
    private _fuseSplashScreenService: FuseSplashScreenService
  ) {
    super();
  }

  ngOnInit(): void {
    this.isProcessing = true;
    this._fuseProgresBarService.show();
    this.initForm();
    const sub = this.sessionService.getAccountId()
      .subscribe(
        (accountId: string) => {
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
            this.getBlockedSampleIP();
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
        });
    this.subscriptions.push(accountDetailSub);
  }

  getBlockedSampleIP() {
    const blockedIPsSub = this._banIpsService.getBlockedSampleIP()
      .subscribe(res => {
        this.blockedIPs = res.data.ips;

        if (this.blockedIPs.length > 0)
          this.hasBlockedIP = true;
        else this.hasBlockedIP = false;

        this._fuseProgresBarService.hide();
        this.isProcessing = false;
        this._fuseSplashScreenService.hide();
      },
        (error: HttpErrorResponse) => {
          this._fuseProgresBarService.hide();

          if (error.status === 404) {
            this._dialogService._openInfoDialog(
              'Tài khoản hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ',
              'tại đây',
              '/gan-tracking/chien-dich'
            );
          }
          else this._dialogService._openErrorDialog(error.error);

          this.hasBlockedIP = false;
          this.isProcessing = false;
          this._fuseSplashScreenService.hide();
        });
    this.subscriptions.push(blockedIPsSub);
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
    this._fuseProgresBarService.show();

    const sub = this._banIpsService.blockSampleIP(params)
      .subscribe(
        (res: ILoginSuccess) => {
          this._fuseProgresBarService.hide();
          this.blockedIPs[0] = params.ip;
          this.hasBlockedIP = true;

          setTimeout(() => {
            this._dialogService._openSuccessDialog({ messages: ['Chặn IP thành công'] });
            this.isProcessing = false;
          }, 0);
        },
        (error: HttpErrorResponse) => {
          if (error.error.messages) {
            this._dialogService._openErrorDialog(error.error);
          }

          this._fuseProgresBarService.hide();
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
    this._dialogService._openConfirmDialog('Bỏ chặn IP này?')
      .subscribe(
        (result: boolean) => {

          if (result) {
            const params = this.generateUnblockeSampleIPParmas();
            this.isProcessing = true;
            this._fuseProgresBarService.show();
            const sub = this._banIpsService.unblockSampleIP(params)
              .subscribe((res: ILoginSuccess) => {
                this._fuseProgresBarService.hide();
                this.blockedIPs = [];
                this.hasBlockedIP = false;
                this._dialogService._openSuccessDialog({ messages: ['Bỏ chặn IP thành công'] });
                this.isProcessing = false;
              },
                (error: HttpErrorResponse) => {
                  this._fuseProgresBarService.hide();
                  this._dialogService._openErrorDialog(error.error);
                  this.isProcessing = false;
                })
            this.subscriptions.push(sub);
          }
        })
  }
}