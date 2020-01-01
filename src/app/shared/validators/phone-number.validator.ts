import { ValidatorFn, AbstractControl } from '@angular/forms';

export const invalidPhoneNumberValidator: ValidatorFn = (control: AbstractControl) => {
  const phoneNumberPattern = /((09|03|07|08|05)+([0-9]{8})\b)/g;
  const isValid = phoneNumberPattern.test(control.value);
  return !isValid ? { 'invalidPhoneNumber': { value: control.value } } : null;
}