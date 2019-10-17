import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { FuseSplashScreenService } from '../../../@fuse/services/splash-screen.service';
import { AuthService } from '../../shared/services/auth.service';
import { DialogService } from '../../shared/services/dialog.service';
import { Router } from '@angular/router';
import { PageBaseComponent } from '../../shared/components/base/page-base.component';
import { SessionService } from '../../shared/services/session.service';
import { ILoginSuccess } from './models/i-login-success';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { ValidatorsService } from 'app/shared/services/validator.service';

declare var gapi: any;

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class LoginComponent extends PageBaseComponent implements OnInit, AfterViewInit {
  loginForm: FormGroup;
  @ViewChild('googleBtn', {static: true}) googleBtn;
  auth2: any;

  constructor(
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    private _fuseProgressiveBarService: FuseProgressBarService,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _authService: AuthService,
    private _router: Router,
    private _dialogService: DialogService,
    private _sessionService: SessionService,
    private _ngZone: NgZone,
    private _navigationService: FuseNavigationService,
    private _validatorService: ValidatorsService,
    private http: HttpClient
  ) {
    super();
    // Configure the layout
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

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, checkValidPassword, Validators.minLength(6)]]
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.googleInit();
    }, 500);
  }

  // -----------------------------------------------------------------------------------------------------
  // @ public methods
  // -----------------------------------------------------------------------------------------------------
  onSubmit(): void {
    const userInfo = {
      ...this.loginForm.value
    };
    this._fuseSplashScreenService.show();
    const sub = this._authService.login(userInfo).subscribe((res: ILoginSuccess) => {
        const token = res.data.meta.token;
        const user = res.data.user;
        this._sessionService.set(token, user);
        this._sessionService.setUser(user);
        this._fuseSplashScreenService.hide();
        this._router.navigateByUrl('/');
      },
      (error: HttpErrorResponse) => {
        this._fuseSplashScreenService.hide();
        this._dialogService._openErrorDialog(error.error);
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

  public attachSignIn(element: any): void {
    this.auth2.attachClickHandler(
      element,
      {},
      (googleUser: any) => {
        this.auth2.grantOfflineAccess({
          access_type: 'offline',
          prompt:      'consent',
        }).then(this.onSignIn(googleUser));
      },
      (error: any) => {
        console.log('google error:' + error.error);
      });
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
      this._dialogService._openErrorDialog({messages: ['Lấy thông tin tài khoản từ google ko thành công']});
    }
  }

  loginByGG(): void {
    this.auth2.grantOfflineAccess().then(this.onSignIn.bind(this));
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
        this._sessionService.setGoogleAccountToken(accessToken, refreshToken);

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

/**
 * Confirm password validator
 *
 * @param {AbstractControl} control
 * @returns {ValidationErrors | null}
 */
export const checkValidPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  if (!control.parent || !control) {
    return null;
  }

  const password = control.parent.get('password');
  const reg = new RegExp(/^[a-zA-Z0-9]*$/);

  if (!reg.test(password.value)) {
    return {invalidPassword: true};
  }
};
