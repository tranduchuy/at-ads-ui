import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AfterViewInit, Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FuseConfigService } from '@fuse/services/config.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FirebaseMessagingService } from 'app/shared/services/firebase-service/firebase-messaging.service';
import { MatTableDataSource } from '@angular/material';
import { FuseSplashScreenService } from '../../@fuse/services/splash-screen.service';
import { environment } from '../../environments/environment';
import { ILoginSuccess } from '../authentication/login/models/i-login-success';
import { AuthService } from '../shared/services/auth.service';
import { DialogService } from '../shared/services/dialog.service';
import { SessionService } from '../shared/services/session.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HomepageService } from './homepage.service';

declare var gapi: any;

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent extends PageBaseComponent implements OnInit, AfterViewInit {
  logColumns = ['datetime', 'ip', 'device', 'os', 'browser', 'network', 'location'];
  logs = [];
  auth2: any;
  dataSource = new MatTableDataSource<Element>(this.logs);

  constructor(
    private _fuseConfigService: FuseConfigService,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _sessionService: SessionService,
    private _dialogService: DialogService,
    private _ngZone: NgZone,
    private _firebaseMessagingService: FirebaseMessagingService,
    private http: HttpClient,
    private _authService: AuthService,
    private _router: Router,
    private _fuseProgressBarService: FuseProgressBarService,
    private _homepageService: HomepageService
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

  ngOnInit(): void {

    this.logs = [];

    this._firebaseMessagingService.getPermission();
    this.get30FirstIPLogs();
  }

  recieveMessage() {
    const sub = this._firebaseMessagingService.getMessage()
      .subscribe((payload: any) => {
        if (Object.keys(payload).length > 0) {

          let log = JSON.parse(payload.data.log);

          this.logs.unshift(log);

          if (this.logs.length > 30) {
            this.logs.pop();
          }

          this.dataSource = new MatTableDataSource<Element>(this.logs);
        }
      });
    this.subscriptions.push(sub);
  }

  get30FirstIPLogs() {
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
            }
          })

        this.dataSource = new MatTableDataSource<Element>(this.logs);

        this.recieveMessage();

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
            console.log(val['access_token'], val['refresh_token']);
            this.submitGoogleLoginForm(val['access_token'], val['refresh_token']);
          },
          response => {
            console.log('POST call in error', response);
          },
          () => {
            console.log('The POST observable is now completed.');
          });
    } else {
      this._dialogService._openErrorDialog({ messages: ['Lấy thông tin tài khoản từ google ko thành công'] });
    }
  }

  loginByGG(): void {
    this.auth2.grantOfflineAccess().then(this.onSignIn.bind(this));
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.googleInit();
    }, 500);
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

  private submitGoogleLoginForm(accessToken: string, refreshToken: string): void {
    this._fuseSplashScreenService.show();
    const sub = this._authService.loginByGoogle({
      accessToken,
      refreshToken
    }).subscribe((res: ILoginSuccess) => {
      const token = res.data.meta.token;
      const user = res.data.user;

      this._sessionService.set(token, user);
      this._sessionService.setUser(user);

      this._ngZone.run(() => this._router.navigateByUrl('/')
        .then(resolve => {
          this._fuseSplashScreenService.hide();
        }));
    },
      (error: HttpErrorResponse) => {
        this._fuseSplashScreenService.hide();
        this._dialogService._openErrorDialog(error.error);
      }
    );
    this.subscriptions.push(sub);
  }

}
