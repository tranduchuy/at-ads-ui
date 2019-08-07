import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../shared/components/base/editable-form-base.component';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { Validators } from '@angular/forms';
import { ILoginSuccess } from '../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { AddAdwordsAccountsService } from './add-adwords-accounts.service';
import { DialogService } from '../../shared/services/dialog.service';
import { FuseNavigationService } from '../../../@fuse/components/navigation/navigation.service';
import { SessionService } from 'app/shared/services/session.service';
import { Router } from '@angular/router';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { AdsAccountIdPipe } from 'app/shared/pipes/ads-account-id/ads-account-id.pipe';

@Component({
  selector: 'app-add-adwords-accounts',
  templateUrl: './add-adwords-accounts.component.html',
  styleUrls: ['./add-adwords-accounts.component.scss']
})
export class AddAdwordsAccountsComponent extends EditableFormBaseComponent implements OnInit {

  form;
  isConnected = false;
  connectedAccountId: string;
  _adsAccountIdPipe = new AdsAccountIdPipe();

  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _fuseNavigationService: FuseNavigationService,
    private _addAdwordsAccountsService: AddAdwordsAccountsService,
    private _sessionService: SessionService,
    private _router: Router,
    private _fuseSlashScreenService: FuseSplashScreenService
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  completeAccountConnection() {
    this._router.navigateByUrl('/gan-tracking/chien-dich');
  }

  post(): void {
    const params = this.generatePostObject();

    this._fuseProgressiveBarService.show();
    const sub = this._addAdwordsAccountsService.addAdwordsAccount(params).subscribe((res) => {
      this._dialogService._openInfoDialog(res.messages[0]);
      this.isConnected = true;
      this._sessionService.setActiveAccountId(res.data.account._id);
      this._sessionService.setActiveAdsAccountId(this._adsAccountIdPipe.transform(res.data.account.adsId));
      this._fuseNavigationService.reloadNavigation();
      this._fuseProgressiveBarService.hide();
    },
      (error: HttpErrorResponse) => {
        if (error.error.messages) {
          this._dialogService._openErrorDialog(error.error);
        }
        this._fuseProgressiveBarService.hide();
      }
    );
    this.subscriptions.push(sub);
  }

  onClickBtnSubmit(): void {
    this.onSubmit();
  }

  initForm(): void {
    this.form = this.fb.group({
      adWordId: [null, [Validators.required]]
    });
  }

  private generatePostObject(): any {
    const params = { ...this.form.value };

    // required
    params.adWordId = params.adWordId.replace(/[^a-zA-Z0-9 ]/g, '');

    return params;
  }

  onPressId(keyCode: number) {
    return (keyCode >= 48 && keyCode <= 57) || keyCode === 45;
  }

}
