import { AfterViewInit, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
import { HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

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
  @ViewChild('googleBtn', { static: true }) googleBtn;
  auth2: any;

  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   * @param {FormBuilder} _formBuilder
   */
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    private _fuseProgressiveBarService: FuseProgressBarService,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _authService: AuthService,
    private _router: Router,
    private _dialogService: DialogService,
    private _sessionService: SessionService
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
      password: ['', Validators.required]
    });
  }

  ngAfterViewInit(): void {
    this.googleInit();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ public methods
  // -----------------------------------------------------------------------------------------------------
  onSubmit(): void {
    this._fuseSplashScreenService.show();
    const userInfo = {
      ...this.loginForm.value
    };
    const sub = this._authService.login(userInfo).subscribe((res: ILoginSuccess) => {
      const token = res.data.meta.token;
      const user = res.data.user;
      this._sessionService.set(token, user);
      this._fuseSplashScreenService.hide();
      this._router.navigate(['/']);
    },
      (error: HttpErrorResponse) => {
        if (error.error.messages) {
          this._dialogService._openErrorDialog(error.error);
        }
        this._fuseSplashScreenService.hide();
      }
    );
    this.subscriptions.push(sub);
  }

  private googleInit(): void {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: environment.googleAuth2ClientID,
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });

      this.attachSignIn(this.googleBtn._elementRef.nativeElement);
    });
  }

  public attachSignIn(element: any): void {
    this.auth2.attachClickHandler(
      element,
      {},
      (googleUser: any) => {
        this.onSignIn(googleUser);
      },
      (error: any) => {
        console.log('google error:' + error.error);
      });
  }

  onSignIn(googleUser: any): void {
    // const profile = googleUser.getBasicProfile();
    // const googleId: number = profile.getId();
    // const name: string = profile.getName();
    // const email: string = profile.getEmail();
    const accessToken: string = googleUser.Zi.access_token;

    this._fuseProgressiveBarService.show();
    const sub = this._authService.loginByGoogle({
      accessToken
    }).subscribe((res: ILoginSuccess) => {
      const token = res.data.meta.token;
      const user = res.data.user;
      this._sessionService.set(token, user);
      this._fuseSplashScreenService.hide();
      this._router.navigateByUrl('/');
    },
      (error: HttpErrorResponse) => {
        if (error.error.messages) {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
        }
        this._fuseSplashScreenService.hide();
      }
    );
    this.subscriptions.push(sub);
  }
}
