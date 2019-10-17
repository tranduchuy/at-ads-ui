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

@Component({
  selector: 'app-account-confirm',
  templateUrl: './account-confirm.component.html',
  styleUrls: ['./account-confirm.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: fuseAnimations
})
export class AccountConfirmComponent extends PageBaseComponent implements OnInit {
  email: string;
  token: string;
  constructor(
    private _fuseConfigService: FuseConfigService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _authService: AuthService,
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

  ngOnInit(): void {
    const sub = this._activatedRoute.params
      .subscribe((param: any) => {
        this.token = param.token;
        if (!this.token) {
          this._router.navigateByUrl('/auth/login');
        } else {
          this.activateAccount();
        }
      });
    this.subscriptions.push(sub);
  }

  activateAccount(): void {
    this._fuseSplashScreenService.show();
    const sub = this._authService.confirmEmail({ token: this.token })
      .subscribe((res: ILoginSuccess) => {
        this._fuseSplashScreenService.hide();
        this._dialogService._openSuccessDialog(res);
        this._router.navigateByUrl('/auth/login');
      },
        (error: HttpErrorResponse) => {
          this._fuseSplashScreenService.hide();
          this._dialogService._openErrorDialog(error.error);
          this._router.navigateByUrl('/auth/login');
        });
    this.subscriptions.push(sub);
  }
}
