import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { AuthService } from '../../shared/services/auth.service';
import { FuseSplashScreenService } from '../../../@fuse/services/splash-screen.service';
import { DialogService } from '../../shared/services/dialog.service';
import { PageBaseComponent } from '../../shared/components/base/page-base.component';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
    selector     : 'forgot-password',
    templateUrl  : './forgot-password.component.html',
    styleUrls    : ['./forgot-password.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ForgotPasswordComponent extends PageBaseComponent implements OnInit
{
    forgotPasswordForm: FormGroup;

    /**
     * Constructor
     *
     * @param {FuseConfigService} _fuseConfigService
     * @param {FormBuilder} _formBuilder
     */
    constructor(
        private _fuseConfigService: FuseConfigService,
        private _formBuilder: FormBuilder,
        private _fuseSplashScreenService: FuseSplashScreenService,
        private _authService: AuthService,
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
        this.forgotPasswordForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    onSubmit(): void {
        this._fuseSplashScreenService.show();
        const info = {
            ...this.forgotPasswordForm.value
        };
        const sub = this._authService.forgotPassword(info.email).subscribe(res =>
          {
              this._fuseSplashScreenService.hide();
              this._dialogService._openSuccessDialog(res);
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
