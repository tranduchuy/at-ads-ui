import {
  Component,
  forwardRef,
  OnDestroy,
  EventEmitter,
  Output,
  Input,
  ViewChild,
  OnInit,
  ElementRef, Optional, Self
} from '@angular/core';
import { InputTextBaseComponent } from '../base/input-base.component';
import {
  NG_VALUE_ACCESSOR,
  ControlValueAccessor,
  FormControl,
  FormGroupDirective,
  NgForm,
  AbstractControl, NgControl
} from '@angular/forms';
import { ErrorStateMatcher, MatLabel } from '@angular/material';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  constructor(public ngControl: NgControl){

  }
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && this.ngControl.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent extends InputTextBaseComponent implements ControlValueAccessor, OnDestroy, OnInit {
  innerValue = '';

  matcher;

  @Input() pristine = false;

  @Input()
  set value(val: any) {
    this.innerValue = val;
  }

  get value(): any {
    return this.innerValue;
  }

  @Output() valueChanged = new EventEmitter<string>();

  @ViewChild('label', {static: true}) label: MatLabel;

  constructor(protected el: ElementRef,   @Optional() @Self() public ngControl: NgControl) {
    super();
    if (this.ngControl != null) {
      // Setting the value accessor directly (instead of using
      // the providers) to avoid running into a circular import.
      this.ngControl.valueAccessor = this;
      this.matcher = new MyErrorStateMatcher(this.ngControl);
    }
  }

  ngOnInit(): void {
  }

  onFocus(): void {
    super.onFocus();

    const input = this.el.nativeElement.querySelector('input');
    if (!input) {
      return;
    }
    console.log(this.ngControl.invalid);

    this.blurEventListener = this.onBlur.bind(this);
    input.addEventListener('blur', this.blurEventListener);
  }

  private onInputBlur(): void {

  }

  ngOnDestroy(): void {
  }

  onInputChange(): void {
    this.writeValue(this.innerValue);
    this.onModelChange(this.innerValue);
    this.valueChanged.emit(this.innerValue);
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

  onLostFocus(): void {
    super.onLostFocus();
    this.onModelTouched();
  }

  private onModelChange = (_: any) => {
  }

  private onModelTouched = () => {
  }

  private onBlur(): void {
    this.onLostFocus();
  }

  private blurEventListener: any = () => {
  }
}
