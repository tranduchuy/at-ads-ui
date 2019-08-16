import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { FuseSplashScreenService } from '../../../@fuse/services/splash-screen.service';
import { AuthService } from '../../shared/services/auth.service';
import { IRegisterSuccess } from './models/i-register-success';
import { PageBaseComponent } from '../../shared/components/base/page-base.component';
import { DialogService } from '../../shared/services/dialog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class RegisterComponent extends PageBaseComponent implements OnInit, OnDestroy {
  registerForm: FormGroup;

  constructor(
    private _fuseConfigService: FuseConfigService,
    private _formBuilder: FormBuilder,
    private _authService: AuthService,
    private _router: Router,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _dialogService: DialogService
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
    this.registerForm = this._formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, checkValidPassword]],
      confirmedPassword: ['', [Validators.required, confirmPasswordValidator]]
    });

    // Update the validity of the 'passwordConfirm' field
    // when the 'password' field changes
    this.registerForm.get('password').valueChanges
      .subscribe(() => {
        this.registerForm.get('confirmedPassword').updateValueAndValidity();
      });
  }

  onSubmit(): void {
    this._fuseSplashScreenService.show();
    const sub = this._authService.register(this.registerForm.value)
      .subscribe(
        (response: IRegisterSuccess) => {
          this._fuseSplashScreenService.hide();
          this._router.navigateByUrl(`/auth/mail-confirm/${this.registerForm.controls['email'].value}`);
        }, (error: HttpErrorResponse) => {
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
export const confirmPasswordValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {

  if (!control.parent || !control) {
    return null;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('confirmedPassword');

  if (!password || !passwordConfirm) {
    return null;
  }

  if (passwordConfirm.value === '') {
    return null;
  }

  if (password.value === passwordConfirm.value) {
    return null;
  }

  return { passwordsNotMatching: true };
};

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

  if (!reg.test(password.value))
    return { invalidPassword: true };
};
