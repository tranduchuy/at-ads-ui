import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { SessionService } from '../session.service';
import { DialogService } from '../dialog.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { map, catchError } from 'rxjs/operators';
import { AddAdwordsAccountsService } from 'app/main/add-adwords-accounts/add-adwords-accounts.service';
import { environment } from 'environments/environment';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import * as _ from 'lodash';
import { Generals } from 'app/shared/constants/generals';

declare var gapi: any;

@Injectable({
  providedIn: 'root'
})
export class CheckRefreshTokenGuardService extends PageBaseComponent implements CanActivate {

  auth2: any;
  activatedRoute: string;

  constructor(
    private _router: Router,
    private _addAdwordsAccountsService: AddAdwordsAccountsService,
    private _sessionService: SessionService,
    private _dialogService: DialogService,
    private _http: HttpClient,
    private _fuseSplashScreenService:FuseSplashScreenService
  ) {
    super();
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

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean> | boolean {

    const listAccounts = this._sessionService.getValueOfListAccounts();
    const activeAccount = _.find(listAccounts, account => account.accountId === this._sessionService.activeAccountId);
    if(!activeAccount) {
      this._dialogService._openInfoDialog('Vui lòng kết nối tài khoản Google Ads');
      this._router.navigateByUrl('/them-tai-khoan-moi');
      return false;
    }
    if(activeAccount &&  activeAccount.connectType === Generals.AccountConnectionType.byGoogleAdsId)
      return true;

    return this._addAdwordsAccountsService.checkRefreshToken()
      .pipe(
        map(res => {
          return true;
        }),
        catchError(err => {
          this.activatedRoute = state.url;
          this.googleInit();
          setTimeout(() => {
            this.loginByGG();
          }, 500);
          return of(false);
        })
      );
  }

  loginByGG(): void {
    this.auth2.grantOfflineAccess().then(this.onSignIn.bind(this));
  }

  onSignIn(googleUser: any): void {
    if (googleUser && googleUser['code']) {
      this._http.post('https://www.googleapis.com/oauth2/v4/token',
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

  updateAccessTokenRefreshToken(): void {
    const params = this._sessionService.getGoogleAccountToken();
    const sub = this._addAdwordsAccountsService.updateAccessTokenRefreshToken(params)
      .subscribe(res => {
        this._fuseSplashScreenService.show();
        this._router.navigateByUrl(this.activatedRoute);
      },
        (error: HttpErrorResponse) => {
          this._dialogService._openErrorDialog(error.error, true);
        });
    this.subscriptions.push(sub);
  }
}
