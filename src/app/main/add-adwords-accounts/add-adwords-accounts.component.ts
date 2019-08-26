import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../shared/components/base/editable-form-base.component';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { Validators } from '@angular/forms';
import { ILoginSuccess } from '../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { AddAdwordsAccountsService } from './add-adwords-accounts.service';
import { DialogService } from '../../shared/services/dialog.service';
import { FuseNavigationService } from '../../../@fuse/components/navigation/navigation.service';
import { SessionService } from 'app/shared/services/session.service';
import { Router } from '@angular/router';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { AdsAccountIdPipe } from 'app/shared/pipes/ads-account-id/ads-account-id.pipe';
import { FirebaseMessagingService } from 'app/shared/services/firebase-messaging.service';

@Component({
  selector: 'app-add-adwords-accounts',
  templateUrl: './add-adwords-accounts.component.html',
  styleUrls: ['./add-adwords-accounts.component.scss']
})
export class AddAdwordsAccountsComponent extends EditableFormBaseComponent implements OnInit {

  form;
  isConnected = false;
  connectedAccountId: string;
  connectedAdsId: string;
  _adsAccountIdPipe = new AdsAccountIdPipe();
  isProcessing: boolean = false;

  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _fuseNavigationService: FuseNavigationService,
    private _addAdwordsAccountsService: AddAdwordsAccountsService,
    private _sessionService: SessionService,
    private _router: Router,
    private _fuseSlashScreenService: FuseSplashScreenService,
    private _firebaseMessagingService: FirebaseMessagingService
  ) {
    super();
  }

  messages = [];

  ngOnInit(): void {
    this.initForm();

    this._firebaseMessagingService.getPermission();
    this._firebaseMessagingService.recieveMessage();

    const sub = this._firebaseMessagingService.getMessage()
      .subscribe((payload: any) => {
        if (payload.notification !== undefined)
          this.messages.push(payload);
      });
    this.subscriptions.push(sub);
  }

  completeAccountConnection() {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._addAdwordsAccountsService.checkAccountAcceptance({
      adWordId: this.connectedAdsId.replace(/\D+/g, '')
    })
      .subscribe(
        res => {
          if (res.data.isConnected) {
            this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });
            setTimeout(() => {
              this._sessionService.setActiveAccountId(this.connectedAccountId);
              this._sessionService.setActiveAdsAccountId(this.connectedAdsId);
              this._sessionService.setAccountId(this.connectedAccountId);
              this._sessionService.setAdwordId(this.connectedAdsId);

              this._fuseProgressiveBarService.hide();
              this._fuseNavigationService.reloadNavigation();
              this._router.navigateByUrl('/gan-tracking/chien-dich');
            }, 2000);
          } else {
            this.isProcessing = false;
            this._fuseProgressiveBarService.hide();
            this._dialogService._openErrorDialog({ messages: ['Kết nối tài khoản Google Ads không thành công. Vui lòng kiếm tra lại'] });
          }

        },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog({ messages: ['Tài khoản Google Ads không tồn tại'] });
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  post(): void {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const params = this.generatePostObject();

    const sub = this._addAdwordsAccountsService.addAdwordsAccount(params)
      .subscribe(
        (res) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openInfoDialog(res.messages[0]);

          if (res.data.isRefresh) {
            this._fuseNavigationService.reloadNavigation();
            this._router.navigateByUrl('/danh-sach-tai-khoan');
            return;
          }

          this.isConnected = true;
          this.connectedAccountId = res.data.account._id;
          this.connectedAdsId = this._adsAccountIdPipe.transform(res.data.account.adsId);

          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  onClickBtnSubmit(): void {
    this.onSubmit();
  }

  initForm(): void {
    this.form = this.fb.group({
      adWordId: [null, [Validators.required]]
    });
  }

  private generatePostObject(): any {
    const params = { ...this.form.value };

    // required
    params.adWordId = params.adWordId.replace(/[^a-zA-Z0-9 ]/g, '');

    return params;
  }

  onPressId(keyCode: number) {
    return (keyCode >= 48 && keyCode <= 57) || keyCode === 45;
  }

}
