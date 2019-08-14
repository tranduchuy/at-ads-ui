import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { Validators } from '@angular/forms';
import { SessionService } from 'app/shared/services/session.service';

@Component({
  selector: 'app-update-user-info',
  templateUrl: './update-user-info.component.html',
  styleUrls: ['./update-user-info.component.scss']
})
export class UpdateUserInfoComponent extends EditableFormBaseComponent implements OnInit {

  constructor(
    private _sessionService: SessionService
  ) {
    super();
  }

  userInfo: any;

  ngOnInit(): void {
    this.initForm();
    this.userInfo = JSON.parse(this._sessionService.user);
    console.log(this.userInfo);
  }

  post(): void {
    const params = this.generatePostObject();
  }

  private initForm(): void {
    this.form = this.fb.group({
      email:  ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, this.validatorService.checkNumber]],
      password: ['', []],
      confirmedPassword: ['', []]
    }, {validators: this.validatorService.checkConfirmPassword()});
  }

  onClickBtnSubmit(): void {
    this.onSubmit();
  }

  private generatePostObject(): any {
    const params = {...this.form.value};

    return params;
  }

}
