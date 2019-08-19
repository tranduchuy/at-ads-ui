import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { SessionService } from 'app/shared/services/session.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { ProfileService } from '../profile.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

@Component({
  selector: 'app-update-user-info',
  templateUrl: './update-user-info.component.html',
  styleUrls: ['./update-user-info.component.scss']
})
export class UpdateUserInfoComponent extends EditableFormBaseComponent implements OnInit {

  isProcessing: boolean = false;
  userInfo: any;

  email: string;

  constructor(
    private _sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _profileService: ProfileService,
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
    this.userInfo = JSON.parse(this._sessionService.user);
  }

  submitForm() {
    this.onSubmit();
  }

  post(): void {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const params = this.generatePostObject();

    const sub = this._profileService.updateProfile(params)
      .subscribe(
        (res) => {

          this._sessionService.setUserProfile(res.data.info.name, res.data.info.phone);
          this.userInfo = JSON.parse(this._sessionService.user);
          this.userInfo.email = this.email;
          this._sessionService.setUser(this.userInfo);

          this._fuseProgressBarService.hide();
          this._dialogService._openSuccessDialog({ messages: ['Cập nhật thông tin thành công'] });
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  private initForm(): void {
    this.form = this.fb.group({
      email: [''],
      name: ['', [Validators.required]],
      phone: [''],
      oldPassword: ['', [this.validatorService.checkValidPassword, this.validatorService.checkMinLength(6)]],
      password: ['', [this.validatorService.checkValidPassword, this.validatorService.checkMinLength(6)]],
      confirmedPassword: ['', [
        this.validatorService.checkValidPassword,
        this.validatorService.checkMinLength(6),
        this.validatorService.checkUpdatedConfirmPassword
      ]]
    });
  }

  private generatePostObject(): any {
    const params = { ...this.form.value };

    if (params.phone === undefined || !params.phone)
      params.phone = "";

    this.email = params.email;

    delete params.email;

    for (const key in params)
      if (!params[key])
        delete params[key];

    return params;
  }

  onPressPhoneNumber(keyCode: number) {
    return (keyCode >= 48 && keyCode <= 57);
  }
}
