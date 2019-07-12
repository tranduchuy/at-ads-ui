import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { PageBaseComponent } from '../../shared/components/base/page-base.component';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { AuthService } from '../../shared/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DialogService } from '../../shared/services/dialog.service';
import { FuseSplashScreenService } from '../../../@fuse/services/splash-screen.service';
import { IResetPasswordSuccess } from './models/i-login-success';

@Component({
    selector     : 'reset-password',
    templateUrl  : './reset-password.component.html',
    styleUrls    : ['./reset-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ResetPasswordComponent extends PageBaseComponent implements OnInit
{
    resetPasswordForm: FormGroup;
    token: string;

    constructor(
        private _fuseConfigService: FuseConfigService,
        private _fuseProgressiveBarService: FuseProgressBarService,
        private _fuseSplashScreenService: FuseSplashScreenService,
        private _formBuilder: FormBuilder,
        private _authService: AuthService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _dialogService: DialogService
    )
    {
        super();
        // Configure the layout
        this._fuseConfigService.config = {
            layout: {
                navbar   : {
                    hidden: true
                },
                toolbar  : {
                    hidden: true
                },
                footer   : {
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
    ngOnInit(): void
    {
        this.token = this._activatedRoute.snapshot.paramMap.get('token');
        this.resetPasswordForm = this._formBuilder.group({
            password       : ['', Validators.required],
            confirmedPassword: ['', [Validators.required, confirmPasswordValidator]]
        });

        // Update the validity of the 'passwordConfirm' field
        // when the 'password' field changes
        this.resetPasswordForm.get('password').valueChanges
            .subscribe(() => {
                this.resetPasswordForm.get('confirmedPassword').updateValueAndValidity();
            });
    }

    onSubmit(): void {
        this._fuseSplashScreenService.show();
        const resetPasswordInfo = {
            token: this.token,
            ...this.resetPasswordForm.value
        };
        const sub = this._authService.resetPassword(resetPasswordInfo).subscribe((res: IResetPasswordSuccess) =>
          {
              this._dialogService._openSuccessDialog(res);
              this._fuseSplashScreenService.hide();
              this._router.navigate(['/']);
          },
          error => {
              if (error.error.messages) {
                  this._dialogService._openErrorDialog(error.error);
              }
              this._fuseSplashScreenService.hide();
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
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

    if ( !control.parent || !control )
    {
        return null;
    }

    const password = control.parent.get('password');
    const passwordConfirm = control.parent.get('confirmedPassword');

    if ( !password || !passwordConfirm )
    {
        return null;
    }

    if ( passwordConfirm.value === '' )
    {
        return null;
    }

    if ( password.value === passwordConfirm.value )
    {
        return null;
    }

    return {passwordsNotMatching: true};
};
