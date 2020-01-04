import RegExp from "typescript-dotnet-commonjs/System/Text/RegularExpressions";
import { ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';

export const validateIP: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const nameRe = new RegExp(/^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$/);
    const isValid = nameRe.isMatch(control.value);
    return !isValid ? { invalidIP: true } : null;
}