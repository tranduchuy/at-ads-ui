import { Component, EventEmitter, forwardRef, Input, Output, Optional, Self, ElementRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR, NgForm, NgControl } from '@angular/forms';
import { BaseComponent } from '../base/base.component';
import { ErrorStateMatcher } from '@angular/material';

const INPUT_NUMBER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputNumberComponent),
  multi: true
};

export class MyErrorStateMatcher implements ErrorStateMatcher {
  constructor(public ngControl: NgControl){

  }
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

  matcher;

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

  constructor(protected el: ElementRef, @Optional() @Self() public ngControl: NgControl) {
    super();
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
      this.matcher = new MyErrorStateMatcher(this.ngControl);
    }
  }

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

  private onModelChange = (_: any) => { };

  private onModelTouched = () => { };
}
