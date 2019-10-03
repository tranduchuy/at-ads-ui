import { Component, OnInit, NgZone, ViewChild, ElementRef, AfterViewInit, Renderer } from '@angular/core';
import { EditableFormBaseComponent } from '../../shared/components/base/editable-form-base.component';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { Validators } from '@angular/forms';
import { ILoginSuccess } from '../../authentication/login/models/i-login-success';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { AddAdwordsAccountsService } from './add-adwords-accounts.service';
import { DialogService } from '../../shared/services/dialog.service';
import { FuseNavigationService } from '../../../@fuse/components/navigation/navigation.service';
import { SessionService } from 'app/shared/services/session.service';
import { Router } from '@angular/router';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { AdsAccountIdPipe } from 'app/shared/pipes/ads-account-id/ads-account-id.pipe';
import { environment } from 'environments/environment';
import { AuthService } from 'app/shared/services/auth.service';
import { AdwordsAccountsService } from 'app/shared/services/ads-accounts/adwords-accounts.service';

declare var gapi: any;

@Component({
  selector: 'app-add-adwords-accounts',
  templateUrl: './add-adwords-accounts.component.html',
  styleUrls: ['./add-adwords-accounts.component.scss']
})
export class AddAdwordsAccountsComponent extends EditableFormBaseComponent implements OnInit, AfterViewInit {
  form;
  isConnected = false;
  connectedAccountId: string;
  connectedAdsId: string;
  _adsAccountIdPipe = new AdsAccountIdPipe();
  isProcessing = false;

  isAccountListShown = false;
  adsAccounts = [];
  adsAccountColumns: string[] = ['order', 'adsId', 'name', 'selection'];
  selectedAccount = '';

  auth2: any;

  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _fuseNavigationService: FuseNavigationService,
    private _addAdwordsAccountsService: AddAdwordsAccountsService,
    private _adwordsAccountsService: AdwordsAccountsService,
    private _sessionService: SessionService,
    private _router: Router,
    private _fuseSlashScreenService: FuseSplashScreenService,
    private http: HttpClient,
    private _ngZone: NgZone,
    private _authService: AuthService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.checkAccountList();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.googleInit();
    }, 500);
  }

  loginByGG(): void {
    this.auth2.grantOfflineAccess().then(this.onSignIn.bind(this));
  }

  checkAccountList(): any {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();
    const sub = this._adwordsAccountsService.getAdwordsAccount()
      .subscribe(
        res => {
          this._fuseProgressiveBarService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this.getAdsAccounts();
        }
      );
    this.subscriptions.push(sub);
  }

  private googleInit(): void {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: environment.googleAuth2ClientID,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email https://www.googleapis.com/auth/adwords'
      });
    });
  }

  showAccountListByEmail(): void {
    this.getAdsAccounts();
  }

  onSignIn(googleUser: any): void {
    if (googleUser && googleUser['code']) {
      this.http.post('https://www.googleapis.com/oauth2/v4/token',
        {
          grant_type: 'authorization_code',
          client_id: environment.googleAuth2ClientID,
          client_secret: 'mcIBWUsnOJ92Knb1fYYtiYSL',
          code: googleUser['code'],
          redirect_uri: environment.oauth2RedirectUri
        } as any)
        .subscribe(
          (val) => {
            this._sessionService.setGoogleAccountToken(val['access_token'], val['refresh_token']);
            setTimeout(() => {
              this.getAdsAccounts();
            }, 500);
          },
          response => {
            console.log('POST call in error', response);
          },
          () => {
            console.log('The POST observable is now completed.');
          });
    } else {
      this._dialogService._openErrorDialog({messages: ['Lấy thông tin tài khoản từ google không thành công']});
    }

  }

  selectAccount(event): void {
    this.selectedAccount = event.value;
  }

  getAdsAccounts(): void {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    // const googleAccountToken = this._sessionService.getGoogleAccountToken();

    const sub = this._addAdwordsAccountsService.getAdsAccounts()
      .subscribe(res => {

          this.adsAccounts = res.data.googleAds;
          this.adsAccounts = (this.adsAccounts || []).map(item => {
            item.googleAdId = this._adsAccountIdPipe.transform(item.googleAdId);
            return item;
          });

          this._fuseProgressiveBarService.hide();
          this.isAccountListShown = true;
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this.isAccountListShown = false;
          this.isProcessing = false;
          this._fuseProgressiveBarService.hide();

          if (error.error.messages[0] === 'unauthorized_client') {
            this.loginByGG();
          } else {
            this._dialogService._openErrorDialog(error.error, true);
          }
        });
    this.subscriptions.push(sub);
  }

  generateConnectAccountByEmailParam(): any {
    return {adWordId: this.selectedAccount.replace(/[^a-zA-Z0-9 ]/g, '')};
  }

  connectAccountByEmail(): void {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const param = this.generateConnectAccountByEmailParam();

    const sub = this._addAdwordsAccountsService.addAdwordsAccount(param)
      .subscribe(
        (res) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openInfoDialog(res.messages[0]);

          this.connectedAccountId = res.data.account._id;
          this.connectedAdsId = this._adsAccountIdPipe.transform(res.data.account.adsId);

          this._sessionService.setActiveAccountId(this.connectedAccountId);
          this._sessionService.setActiveAdsAccountId(this.connectedAdsId);
          this._sessionService.setAccountId(this.connectedAccountId);
          this._sessionService.setAdwordId(this.connectedAdsId);

          this._fuseNavigationService.reloadNavigation();

          if (res.data.isRefresh) {
            this._router.navigateByUrl('/danh-sach-tai-khoan');
            return;
          }

          this.isConnected = true;

          this.selectedAccount = '';
          this.getAdsAccounts();

          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {

          this.isConnected = false;
          this.connectedAccountId = '';
          this.connectedAdsId = '';

          this._fuseProgressiveBarService.hide();
          if (error.error.messages[0] === 'Không xác định được lỗi') {
            this._dialogService._openErrorDialog(
              {
                messages: [
                  `Không thể gắn tracking vào tài khoản này!<br> 
Có thể bạn chưa kết nối Google Ads với Appnet Technology <br> 
hoặc tài khoản này đã tồn tại trong hệ thống.
                `
                ]
              },
              true
            );
          } else {
            this._dialogService._openErrorDialog(error.error);
          }
          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  completeAccountConnection(): void {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._addAdwordsAccountsService.checkAccountAcceptance({
      adWordId: this.connectedAdsId.replace(/\D+/g, '')
    })
      .subscribe(
        res => {
          if (res.data.isConnected) {
            this._dialogService._openSuccessDialog({messages: ['Kết nối tài khoản Google Ads thành công']});

            setTimeout(() => {

              // this._sessionService.setActiveAccountId(this.connectedAccountId);
              // this._sessionService.setActiveAdsAccountId(this.connectedAdsId);
              // this._sessionService.setAccountId(this.connectedAccountId);
              // this._sessionService.setAdwordId(this.connectedAdsId);
              // this._fuseNavigationService.reloadNavigation();

              this._fuseProgressiveBarService.hide();
              this._router.navigateByUrl('/gan-tracking/chien-dich');
            }, 2000);
          } else {
            this.isProcessing = false;
            this._fuseProgressiveBarService.hide();
            this._dialogService._openErrorDialog(
              {messages: ['Hoàn tất kết nối tài khoản Google Ads thất bại.']},
              true
            );
          }

        },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog({messages: ['Tài khoản Google Ads không tồn tại']});
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

          this._sessionService.setActiveAccountId(this.connectedAccountId);
          this._sessionService.setActiveAdsAccountId(this.connectedAdsId);
          this._sessionService.setAccountId(this.connectedAccountId);
          this._sessionService.setAdwordId(this.connectedAdsId);
          this._fuseNavigationService.reloadNavigation();

          if (this.isAccountListShown) {
            this.getAdsAccounts();
          }

          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {

          this.isConnected = false;
          this.connectedAccountId = '';
          this.connectedAdsId = '';

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
    const params = {...this.form.value};

    // required
    params.adWordId = params.adWordId.replace(/[^a-zA-Z0-9 ]/g, '');

    return params;
  }

  onPressId(keyCode: number): boolean {
    return (keyCode >= 48 && keyCode <= 57) || keyCode === 45;
  }

}
