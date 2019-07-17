import { Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { ErrorStateMatcher } from '@angular/material';

const INPUT_NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputNumberComponent),
  multi: true
};

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && form.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  templateUrl: './input-number.component.html',
  selector: 'app-input-number',
  styleUrls: ['./input-number.component.scss'],
  providers: [INPUT_NUMBER_VALUE_ACCESSOR]
})

export class InputNumberComponent extends BaseComponent implements ControlValueAccessor {
  private _decimal = 0;
  private _target;
  _value = '';
  _mask = '0*';

  matcher = new MyErrorStateMatcher();

  @Input() pristine = false;

  @Input() icon = '';
  @Input() placeholder = '';

  @Input()
  set value(v: any) {
    this._value = v;
  }

  get value(): any {
    return this._value;
  }

  @Input()
  set decimal(value: number) {
    this._decimal = value;
  }

  @Output() valueChanged = new EventEmitter<number>();
  @Output() pressEnter = new EventEmitter<any>();
  @Output() lostFocus = new EventEmitter<any>();

  onChangeValue(): void {
    this.updateModel();
    this.valueChanged.emit(this.value);
  }

  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  updateModel(): void {
    this.onModelChange(this.value);
  }

  onGotBlur(): void {
    this.onModelTouched();
    this.onModelChange(this.value);
    this.lostFocus.emit();
  }

  private onModelChange = (_: any) => {};

  private onModelTouched = () => {};
}
