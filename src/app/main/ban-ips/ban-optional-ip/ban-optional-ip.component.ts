import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { Validators } from '@angular/forms';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { SessionService } from '../../../shared/services/session.service';
import { Router } from '@angular/router';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

@Component({
  selector: 'app-ban-optional-ip',
  templateUrl: './ban-optional-ip.component.html',
  styleUrls: ['./ban-optional-ip.component.scss']
})
export class BanOptionalIPComponent extends EditableFormBaseComponent implements OnInit {

  displayedColumns: string[] = ['order', 'ip', 'status', 'task', 'unlockButton'];
  blockedIPs: string[] = [];
  isProcessing: boolean = true;

  constructor(
    private _banIpsService: BanIpsService,
    private _fuseProgresBarService: FuseProgressBarService,
    public sessionService: SessionService,
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
            this.getBlockedCustomIPs();
          }
          else {
            this._fuseProgresBarService.hide();
            this._dialogService._openInfoDialog('Tài khoản Google Ads chưa được chấp nhận quyền quản lý hệ thống');
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

  getBlockedCustomIPs() {
    this.isProcessing = true;
    this._fuseProgresBarService.show();
    const sub = this._banIpsService.getBlockedCustomIPs()
      .subscribe(res => {
        this._fuseProgresBarService.hide();
        this._fuseSplashScreenService.hide();
        this.blockedIPs = res.data.ips;
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

          this.blockedIPs = [];
        }
      );
    this.subscriptions.push(sub);
  }

  onSubmitForm(): void {
    this.onSubmit();
  }

  post(): void {
    const params = this.generatePostObject();
    this.isProcessing = true;
    this._fuseProgresBarService.show();
    const sub = this._banIpsService.blockIPs(params)
      .subscribe(
        (res: ILoginSuccess) => {

          this.getBlockedCustomIPs();

          setTimeout(() => {
            this._fuseProgresBarService.hide();
            this._dialogService._openSuccessDialog(res);
            this.isProcessing = false;
          }, 0);
        },
        (error: HttpErrorResponse) => {
          this._fuseProgresBarService.hide();

          if (error.status === 409) {

            if (error.error.messages[0] === 'Ip đang nằm trong whiteList.')
              this._dialogService._openErrorDialog({
                messages: [`${error.error.data.ips.join(', ')} đã có trong whitelist.`]
              });
            else
              this._dialogService._openErrorDialog({
                messages: [`${error.error.data.ips.join(', ')} đã có trong blacklist.`]
              });
          }
          else this._dialogService._openErrorDialog(error.error);

          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  initForm(): void {
    this.form = this.fb.group({
      listBannedIP: ['', [Validators.required, this.validatorService.checkWhiteListIP]]
    });
  }

  parseIP(ip: string): string {
    if (ip.includes('.*.*'))
      return ip.replace('.*.*', '.0.0') + '/16';
    if (ip.includes('.*'))
      return ip.replace('.*', '.0') + '/24';
    return ip;
  }

  private generatePostObject(): any {
    const params = {
      action: 'ADD',
      ips: { ...this.form.value }.listBannedIP.split(/\r?\n/)
    };

    params.ips = params.ips.filter((ip: string) => ip);
    params.ips = params.ips.map((ip: string) => this.parseIP(ip));

    return params;
  }

  unblockSampleIP(ip: string) {
    const openCofirmDialogSub = this._dialogService._openConfirmDialog('Bỏ chặn IP này?')
      .subscribe(
        (res: boolean) => {
          if (res) {
            this.isProcessing = true;
            this._fuseProgresBarService.show();

            const sub = this._banIpsService.removeBlockedIPs({
              action: 'REMOVE',
              ips: [this.parseIP(ip)]
            })
              .subscribe((res: ILoginSuccess) => {

                this.getBlockedCustomIPs();

                setTimeout(() => {
                  this._fuseProgresBarService.hide();
                  this._dialogService._openSuccessDialog(res);
                  this.isProcessing = false;
                }, 0);
              },
                (error: HttpErrorResponse) => {
                  this._fuseProgresBarService.hide();

                  if (error.status === 404)
                    this._dialogService._openErrorDialog({ messages: [`${error.error.data.ips[0]} không nằm trong danh sách IP đã bị chặn`] });
                  else this._dialogService._openErrorDialog(error.error);

                  this.isProcessing = false;
                });
            this.subscriptions.push(sub);
          }
        });
    this.subscriptions.push(openCofirmDialogSub);
  }
}
