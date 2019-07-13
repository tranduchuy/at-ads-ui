import { Component, OnInit, ViewEncapsulation } from '@angular/core';
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
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class LoginComponent extends PageBaseComponent implements OnInit {
  loginForm: FormGroup;

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

  // -----------------------------------------------------------------------------------------------------
  // @ public methods
  // -----------------------------------------------------------------------------------------------------
  onSubmit(): void {
    this._fuseSplashScreenService.show();
    const userInfo = {
      ...this.loginForm.value
    };
    const sub = this._authService.login(userInfo).subscribe((res: ILoginSuccess) =>
      {
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
}
