import { Component, ViewEncapsulation, OnInit } from '@angular/core';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { AuthService } from 'app/shared/services/auth.service';
import { ILoginSuccess } from '../login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { EditableFormBaseComponent } from 'app/shared/components/base/editable-form-base.component';
import { Validators } from '@angular/forms';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';

@Component({
  selector: 'app-resend-email',
  templateUrl: './resend-email.component.html',
  styleUrls: ['./resend-email.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class ResendEmailComponent extends EditableFormBaseComponent implements OnInit {

  onSubmiting: boolean = false;

  /**
   * Constructor
   *
   * @param {FuseConfigService} _fuseConfigService
   */
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
    private _fuseProgressBarService: FuseProgressBarService
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

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required]]
    });
  }

  resendEmail() {
    this.onSubmit();
  }

  post() {
    this.onSubmiting = true;
    this._fuseProgressBarService.show();
    const sub = this._authService.resendEmail({ ...this.form.value }.email)
      .subscribe((res: ILoginSuccess) => {
        this._fuseProgressBarService.hide();
        this._dialogService._openInfoDialog(res.messages[0]);
        this.onSubmiting = false;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.onSubmiting = false;
        });
    this.subscriptions.push(sub);
  }

}
