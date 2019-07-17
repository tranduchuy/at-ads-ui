import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export namespace ErrorNames {
  export const required = ['required', 'Bắt buộc'];
  export const patternUrl = ['patternUrl', 'Url sai'];
  export const patternNumber = ['patternNumber', 'Chỉ được phéo nhập số'];
  export const patternHotlineNumber = ['patternHotlineNumber', 'Chỉ được phéo nhập số và khoảng trắng'];
  export const fileNotLoad = ['fileNotLoad', 'Chưa có file'];
  export const minLength = ['minLength', 'Quá ngắn'];
  export const maxLength = ['maxLength', 'Quá dài'];
  export const minNumberValue = ['minNumberValue', 'Quá thấp'];
  export const maxNumberValue = ['maxMaxNumber', 'Quá cao'];
  export const slug = ['slug', 'Slug sai'];
  export const areStoreSelected = ['areaStore', 'Chưa chọn store nào'];
  export const invalidIP = ['invalidIP', 'IP không hợp lệ'];
}

@Injectable()
export class ValidatorsService {
  static isURL(str: string): boolean {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
      '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
      '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return pattern.test(str);
  }

  public checkIP(control: AbstractControl): any {
    const regex = new RegExp(/^([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})[.]([0-9]{1,3})$/);
    if(!regex.test(control.value))
      return {[ErrorNames.invalidIP[0]]: true};
  }

  public checkDomain(str: string): boolean {
    return ValidatorsService.isURL(str);
  }

  public checkUrlSeo(control: AbstractControl): any {
    const regex = new RegExp(/^[a-zA-Z0-9\-]+$/, 'g');
    if (!regex.test(control.value)) {
      return { [ErrorNames.patternUrl[0]]: true };
    }
  }

  public checkUrl(control: AbstractControl): any {
    const value = control.value;

    if (!ValidatorsService.isURL(value.toString())) {
      return { [ErrorNames.patternUrl[0]]: true };
    }
  }

  public checkHotline(control: AbstractControl): any {
    const reg = /^(\d|\s)+$/;
    const value = control.value;
    if (!reg.test(value.toString())) {
      return { [ErrorNames.patternHotlineNumber[0]]: true };
    }
  }

  public checkNumber(control: AbstractControl): any {
    const reg = /^\d+$/;
    const value = control.value;
    if (!reg.test(value.toString())) {
      return { [ErrorNames.patternNumber[0]]: true };
    }
  }

  public checkMinLength(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const errors: ValidationErrors = {};
      const value = control.value || '';
      if (value.toString().length < minLength) {
        errors[ErrorNames.minLength[0]] = true;
      }
      return errors;
    };
  }

  public checkMinNumberValue(minPrice: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const errors: ValidationErrors = {};
      const value = control.value;

      if (value < minPrice) {
        errors[ErrorNames.minNumberValue[0]] = true;
      }
      return errors;
    };
  }

  public checkMaxNumberValue(maxPrice: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const errors: ValidationErrors = {};
      const value = control.value;

      if (value > maxPrice) {
        errors[ErrorNames.maxNumberValue[0]] = true;
      }
      return errors;
    };
  }

  public checkMaxLength(maxLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors => {
      const errors: ValidationErrors = {};
      const value = control.value || '';
      if (value.toString().length > maxLength) {
        errors[ErrorNames.maxLength[0]] = true;
      }
      return errors;
    };
  }

  public checkSlugString(control: AbstractControl): any {
    const value = control.value;
    const reg = new RegExp('^[A-Za-z0-9]+(?:-[A-Za-z0-9]+)*$');
    if (!reg.test(value.toString())) {
      return { [ErrorNames.slug[0]]: true };
    }
  }

  public checkAreaStoreSelected(control: AbstractControl): any {
    const value = control.value;
    if (value.length === 0) {
      return { [ErrorNames.areStoreSelected[0]]: true };
    }
  }

  public isRequired(control: AbstractControl): any {
    const value = control.value;
    if (!value) {
      return {[ErrorNames.required[0]]: true};
    }
  }
}
