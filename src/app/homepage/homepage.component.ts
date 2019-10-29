import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, NgZone, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
// import { FirebaseMessagingService } from 'app/shared/services/firebase-service/firebase-messaging.service';
import { MatTableDataSource } from '@angular/material';
import { Socket } from 'ngx-socket-io';
import { FuseSplashScreenService } from '../../@fuse/services/splash-screen.service';
import { environment } from '../../environments/environment';
import { ILoginSuccess } from '../authentication/login/models/i-login-success';
import { AuthService } from '../shared/services/auth.service';
import { DialogService } from '../shared/services/dialog.service';
import { SessionService } from '../shared/services/session.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HomepageService } from './homepage.service';
import { AdwordsAccountsService } from 'app/shared/services/ads-accounts/adwords-accounts.service';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

declare var gapi: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent extends PageBaseComponent implements OnInit, AfterViewInit, OnDestroy {
  logColumns = ['datetime', 'ip', 'os', 'browser', 'network', 'location'];
  logs = [];
  auth2: any;
  dataSource = new MatTableDataSource<Element>(this.logs);
  isOnLogin: boolean;

  constructor(
    private _fuseConfigService: FuseConfigService,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _sessionService: SessionService,
    private _dialogService: DialogService,
    private _ngZone: NgZone,
    // private _firebaseMessagingService: FirebaseMessagingService,
    private _socket: Socket,
    private http: HttpClient,
    private _authService: AuthService,
    private _router: Router,
    private _fuseProgressBarService: FuseProgressBarService,
    private _homepageService: HomepageService,
    private _adwordsAccountsService: AdwordsAccountsService,
    private _fuseNavigationService: FuseNavigationService
  ) {

    super();

    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };
  }

  lastOffset = 0;
  isContactFooterDisplayed: boolean = true;
  isTopbarDisplayed = false;
  isTopbarTitleDisplayed = false;
  isContactDisplayed: boolean = false;

  scroll = (event: any): void => {
    const currentOffset = event.srcElement.scrollTop;

    // if (currentOffset < this.lastOffset)
    //   this.isContactFooterDisplayed = false;
    // else this.isContactFooterDisplayed = true;

    if (currentOffset > 470) {
      this.isTopbarDisplayed = true;
      this.isTopbarTitleDisplayed = window.innerWidth > 600;
    } else {
      this.isTopbarDisplayed = false;
    }

    this.lastOffset = currentOffset;
  }

  ngOnDestroy(): void {
    window.removeEventListener('scroll', this.scroll, true);
  }

  ngAfterViewInit(): void {
    window.addEventListener('scroll', this.scroll, true);
  }

  ngOnInit(): void {
    this.isOnLogin = !!this._sessionService.user;

    // this._firebaseMessagingService.getPermission();
    setTimeout(() => {
      this.googleInit();
    }, 200);
    this.get30FirstIPLogs();
  }

  receiveMessage(): void {
    this._socket
      .fromEvent('message')
      .subscribe((value: any) => {
        try {
          const log = JSON.parse(value);
          this.logs.unshift(log);
          if (this.logs.length > 30) {
            this.logs.pop();
          }

          this.dataSource = new MatTableDataSource<Element>(this.logs);
        } catch (e) {
          console.error(e);
        }
      });
  }

  get30FirstIPLogs(): void {
    this._fuseProgressBarService.show();
    const sub = this._homepageService.get30FirstIPLogs()
      .subscribe(res => {

        this.logs = (res.data.logs || [])
          .map(item => {
            return {
              createdAt: item.createdAt,
              ip: item.ip,
              device: {
                name: item.device !== undefined ? item.device.vendor : null
              },
              os: {
                name: item.os !== undefined ? item.os.name : null,
                version: item.os !== undefined ? item.os.version : null
              },
              browser: {
                name: item.browser !== undefined ? item.browser.name : null,
                version: item.browser !== undefined ? item.browser.version : null
              },
              network: {
                name: item.networkCompany !== undefined ? item.networkCompany.name : null
              },
              location: {
                city: item.location !== undefined ? item.location.city : null
              },
            };
          });

        this.dataSource = new MatTableDataSource<Element>(this.logs);

        this.receiveMessage();

        this._fuseProgressBarService.hide();
      });
    this.subscriptions.push(sub);
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
            this.submitGoogleLoginForm(val['access_token'], val['refresh_token'] || null);
          },
          response => {
            console.error('POST call in error', response);
          },
          () => {
            console.log('The POST observable is now completed.');
          });
    } else {
      this._dialogService._openErrorDialog({ messages: ['Lấy thông tin tài khoản từ Google không thành công'] });
    }
  }

  loginByGG(): void {
    this.auth2.grantOfflineAccess({
      prompt: 'select_account'
    }).then(this.onSignIn.bind(this));
  }

  showImageDialog(imgSrc: string): void {
    this._dialogService._openImageDialog(imgSrc);
  }

  checkLogin(): void {
    if (this._sessionService.user) {
      this._router.navigateByUrl('/');
    } else {
      this.isOnLogin = false;
      this.loginByGG();
    }
  }

  private googleInit(): void {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: environment.googleAuth2ClientID,
        cookie_policy: 'single_host_origin',
        scope: 'profile email https://www.googleapis.com/auth/adwords'
      });
    });
  }

  private submitGoogleLoginForm(accessToken: string, refreshToken?: string): void {
    this._fuseSplashScreenService.show();
    const params: any = { accessToken };
    if (refreshToken) {
      params.refreshToken = refreshToken;
    }
    const sub = this._authService.loginByGoogle(params)
      .subscribe((res: ILoginSuccess) => {
        const token = res.data.meta.token;
        const user = res.data.user;

        this._sessionService.set(token, user);
        this._sessionService.setUser(user);
        this._sessionService.setGoogleAccountToken(accessToken, refreshToken);

        this._ngZone.run(() => this.checkAccountList());
      },
        (error: HttpErrorResponse) => {
          this._fuseSplashScreenService.hide();
          this._dialogService._openErrorDialog(error.error);
        }
      );
    this.subscriptions.push(sub);
  }

  checkAccountList(): any {
    const sub = this._sessionService.checkIfUserHasAccount()
      .subscribe((userHasAccount: boolean) => {
        if (userHasAccount) {
          this._fuseSplashScreenService.hide();
          return this._router.navigateByUrl('/danh-sach-tai-khoan');
        } else {
          this._fuseSplashScreenService.hide();
          return this._router.navigateByUrl('/them-tai-khoan-moi');
        }
      });
    this.subscriptions.push(sub);
  }
}
