import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../shared/components/base/editable-form-base.component';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { Validators } from '@angular/forms';
import { ILoginSuccess } from '../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { AddAdwordsAccountsService } from './add-adwords-accounts.service';
import { DialogService } from '../../shared/services/dialog.service';

@Component({
  selector: 'app-add-adwords-accounts',
  templateUrl: './add-adwords-accounts.component.html',
  styleUrls: ['./add-adwords-accounts.component.scss']
})
export class AddAdwordsAccountsComponent extends EditableFormBaseComponent implements OnInit {

  form;
  isConnected = false;
  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _addAdwordsAccountsService: AddAdwordsAccountsService
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  post(): void {
    const params = this.generatePostObject();

    this._fuseProgressiveBarService.show();
    const sub = this._addAdwordsAccountsService.addAdwordsAccount(params).subscribe((res: ILoginSuccess) =>
      {
        this._dialogService._openSuccessDialog(res);
        this.isConnected = true;
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
      adWordId: [null, [Validators.required, this.validatorService.checkMinLength(10), this.validatorService.checkMaxLength(10)]]
    });
  }

  private generatePostObject(): any {
    const params = {...this.form.value};

    // required
    params.adWordId = params.adWordId;

    return params;
  }

}
