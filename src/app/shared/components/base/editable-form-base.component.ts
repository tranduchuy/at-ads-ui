import { FormGroup, FormBuilder } from '@angular/forms';
import { PageBaseComponent } from './page-base.component';
import { ServiceLocator } from '../../services/service-locator';
import { ErrorNames, ValidatorsService } from '../../services/validator.service';
import { DialogService } from '../../services/dialog.service';

export abstract class EditableFormBaseComponent extends PageBaseComponent {

  protected fb: FormBuilder;
  protected validatorService: ValidatorsService;
  protected _dialogService: DialogService;

  form: FormGroup;
  errors: any[] = [];

  constructor() {
    super();

    this.fb = ServiceLocator.injector.get(FormBuilder);
    this.validatorService = ServiceLocator.injector.get(ValidatorsService);
    this._dialogService = ServiceLocator.injector.get(DialogService);
  }

  abstract post(name?: string): void;

  onSubmit(): any {
    this.errors = [];
    this.markAsTouched(this.form);
    this.buildObjectError(this.form);

    if (this.errors.length !== 0) {
      this._dialogService._openErrorDialog({messages: ['Đã xảy ra lỗi vui lòng kiểm tra lại thông tin.']});
      return;
    }

    return this.post(name);
  }

  getMessageErrors(controlName: string): string[] {
    const control = this.form.controls[controlName];
    if (!control.errors || !control.touched) {
      return [];
    }

    const keyErrors = Object.keys(control.errors);

    return keyErrors.map(key => this.getMessage(key));
  }

  markAsTouched(form: FormGroup): void {
    const controls = Object.keys(form.controls);
    controls.forEach((controlName: string) => {
      const control = form.controls[controlName];
      if (control instanceof FormGroup) {
        this.markAsTouched(control);
      } else {
        control.markAsTouched({onlySelf: true});
      }
    });
  }

  buildObjectError(form: FormGroup): void  {
    const controls = Object.keys(form.controls);
    controls.forEach((controlName: string) => {
      const control = form.controls[controlName];
      if (control instanceof FormGroup) {
        this.buildObjectError(control);
      } else if (!control.errors) {
        // do nothing
      } else {
        control.hasError('incorrect');
        const errorKeys = Object.keys(control.errors);
        errorKeys.forEach((k: any) => {
          if (this.errors.indexOf(k) === -1) {
            this.errors.push(`${k}: ` + this.getMessage(k));
          }
        });
      }
    });
  }

  private getMessage(keyErr: string): string {
    switch (keyErr) {
      case ErrorNames.required[0]:
        return ErrorNames.required[1];

      case ErrorNames.slug[0]:
        return ErrorNames.slug[1];

      case ErrorNames.fileNotLoad[0]:
        return ErrorNames.fileNotLoad[1];

      case ErrorNames.patternUrl[0]:
        return ErrorNames.patternUrl[1];

      case ErrorNames.minLength[0]:
        return ErrorNames.minLength[1];

      case ErrorNames.maxLength[0]:
        return ErrorNames.maxLength[1];

      case ErrorNames.patternNumber[0]:
        return ErrorNames.patternNumber[1];

      case ErrorNames.areStoreSelected[0]:
        return ErrorNames.areStoreSelected[1];
      case ErrorNames.patternHotlineNumber[0]:
        return ErrorNames.patternHotlineNumber[1];
      case ErrorNames.minNumberValue[0]:
        return ErrorNames.minNumberValue[1];

      case ErrorNames.invalidIP[0]:
        return ErrorNames.invalidIP[1];

      case ErrorNames.invalidListIP[0]:
        return ErrorNames.invalidListIP[1];

      case ErrorNames.wrongPassword[0]:
        return ErrorNames.wrongPassword[1];

      case ErrorNames.email[0]:
        return ErrorNames.email[1];

      case ErrorNames.invalidAdwordsAccountId[0]:
        return ErrorNames.invalidAdwordsAccountId[1];

      case ErrorNames.invalidDomain[0]:
        return ErrorNames.invalidDomain[1];
    }

    return `Something error ${keyErr}`;
  }
}
