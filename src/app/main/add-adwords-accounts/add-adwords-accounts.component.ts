import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../shared/components/base/editable-form-base.component';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { Validators } from '@angular/forms';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { AddAdwordsAccountsService } from './add-adwords-accounts.service';
import { DialogService } from '../../shared/services/dialog.service';
import { FuseNavigationService } from '../../../@fuse/components/navigation/navigation.service';
import { SessionService } from 'app/shared/services/session.service';
import { Router } from '@angular/router';
import { AdsAccountIdPipe } from 'app/shared/pipes/ads-account-id/ads-account-id.pipe';
import { environment } from 'environments/environment';
import { AdwordsAccountsService } from 'app/shared/services/ads-accounts/adwords-accounts.service';
import { MatTableDataSource } from '@angular/material';
import { distinctUntilChanged } from 'rxjs/operators';

declare var gapi: any;

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
  isProcessing = false;

  isAccountListShown = false;
  adsAccounts = [];
  adsAccountColumns: string[] = ['order', 'adsId', 'name', 'selection'];
  selectedAccount = '';
  disableAllControls: boolean;

  auth2: any;

  dataSource = new MatTableDataSource(this.adsAccounts);

  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _fuseNavigationService: FuseNavigationService,
    private _addAdwordsAccountsService: AddAdwordsAccountsService,
    private _adwordsAccountsService: AdwordsAccountsService,
    private _sessionService: SessionService,
    private _router: Router,
    private http: HttpClient,
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.googleInit();
    this.checkAccountList();
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  loginByGG(): void {
    this.auth2.grantOfflineAccess().then(this.onSignIn.bind(this));
  }

  hasValue(value: any) {
    return value !== null && value !== undefined;
  }

  checkAccountList(): any {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();
    const user = this._sessionService.user;
    const sub = this._sessionService.getListAccounts()
      .subscribe(listAccounts => {
        if (listAccounts) {
          if (listAccounts.length === 0) {
            this.showAccountListByEmail();
            this.disableAllControls = false;
          }
          else {
            if (user.type !== 'VIP1')
              this.disableAllControls = true;

            this._fuseProgressiveBarService.hide();
            this.isProcessing = false;
          }
        }
      });
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
    this.checkRefreshToken();
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
              this.updateAccessTokenRefreshToken();
            }, 500);
          },
          response => {
            console.log('POST call in error', response);
          },
          () => {
            console.log('The POST observable is now completed.');
          });
    } else {
      this._dialogService._openErrorDialog({ messages: ['Lấy thông tin tài khoản từ google không thành công'] });
    }

  }

  selectAccount(event): void {
    this.selectedAccount = event.value;
  }

  checkRefreshToken(): void {
    this.isProcessing = false;
    this._fuseProgressiveBarService.show();

    const sub = this._addAdwordsAccountsService.checkRefreshToken()
      .subscribe(res => {
        this.isProcessing = false;
        this._fuseProgressiveBarService.hide();
        this.getAccountsFromGoogleAds();
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this.isProcessing = false;
          this.isAccountListShown = false;
          this.loginByGG();
        });
    this.subscriptions.push(sub);
  }

  updateAccessTokenRefreshToken(): void {
    this.isProcessing = false;
    this._fuseProgressiveBarService.show();

    const params = this._sessionService.getGoogleAccountToken();
    const sub = this._addAdwordsAccountsService.updateAccessTokenRefreshToken(params)
      .subscribe(res => {
        this._fuseProgressiveBarService.hide();
        this.isProcessing = false;
        this.getAccountsFromGoogleAds();
      },
        (error: HttpErrorResponse) => {
          this._dialogService._openErrorDialog(error.error, true);
          this._fuseProgressiveBarService.hide();
          this.isAccountListShown = false;
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  getAccountsFromGoogleAds(): void {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._addAdwordsAccountsService.getAccountsFromGoogleAds()
      .subscribe(res => {

        this.adsAccounts = res.data.googleAds;
        this.adsAccounts = (this.adsAccounts || []).map(item => {
          item.googleAdId = this._adsAccountIdPipe.transform(item.googleAdId);
          return item;
        });

        this.dataSource = new MatTableDataSource(this.adsAccounts);

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
    return { adWordId: this.selectedAccount.replace(/\D/g, '') };
  }

  connectAccountByEmail(): void {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const param = this.generateConnectAccountByEmailParam();

    const sub = this._addAdwordsAccountsService.addAdwordsAccountByEmail(param)
      .subscribe(
        (res) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });

          this.connectedAccountId = res.data.account._id;
          this.connectedAdsId = this._adsAccountIdPipe.transform(res.data.account.adsId);

          this._sessionService.setActiveGoogleAdsAccount(this.connectedAccountId, this.connectedAdsId);
          this._sessionService.notifyListAccountsChanged();
          this._fuseNavigationService.reloadNavigation();

          this._router.navigateByUrl('/gan-tracking/chien-dich');
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
      adWordId: this.connectedAdsId.replace(/\D/g, '')
    })
      .subscribe(
        res => {
          if (res.data.isConnected) {
            this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });

            setTimeout(() => {
              this._fuseProgressiveBarService.hide();
              this._router.navigateByUrl('/gan-tracking/chien-dich');
            }, 2000);
          } else {
            this.isProcessing = false;
            this._fuseProgressiveBarService.hide();
            this._dialogService._openErrorDialog(
              { messages: ['Hoàn tất kết nối tài khoản Google Ads thất bại.'] },
              true
            );
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

          this.connectedAccountId = res.data.account._id;
          this.connectedAdsId = this._adsAccountIdPipe.transform(res.data.account.adsId);

          if (res.data.isRefresh === true) {
            this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công'] });
            this._sessionService.setActiveGoogleAdsAccount(this.connectedAccountId, this.connectedAdsId);
            this._sessionService.notifyListAccountsChanged();
            this._fuseNavigationService.reloadNavigation();
            this._router.navigateByUrl('/danh-sach-tai-khoan');
            return;
          }
          else {
            this._dialogService._openSuccessDialog({ messages: ['Kết nối tài khoản Google Ads thành công! Vui lòng thực hiện theo các bước tiếp theo để hoàn tất kết nối.'] });
          }

          if (this.isAccountListShown === true) {
            this.isAccountListShown = false;
          }

          this.isProcessing = false;
          this.isConnected = true;
          this._sessionService.setActiveGoogleAdsAccount(this.connectedAccountId, this.connectedAdsId);
          this._sessionService.notifyListAccountsChanged();
          this._fuseNavigationService.reloadNavigation();
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
    const params = { ...this.form.value };

    // required
    params.adWordId = params.adWordId.replace(/\D/g, '');

    return params;
  }

  onPressId(keyCode: number): boolean {
    return (keyCode >= 48 && keyCode <= 57) || keyCode === 45;
  }

}
