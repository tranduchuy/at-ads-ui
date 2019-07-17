import { Component, Input, Output, EventEmitter, ViewChild, forwardRef } from '@angular/core';
import { ISelectTextItem } from './i-select-text-item';

import { ControlValueAccessor, FormControl, FormGroupDirective, NG_VALUE_ACCESSOR, NgForm } from '@angular/forms';
import { ErrorStateMatcher, MatSelect } from '@angular/material';
import { BaseComponent } from '../base/base.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && form.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-select-text',
  templateUrl: './select-text.component.html',
  styleUrls: ['./select-text.component.scss'],
  providers: [
    { 
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => SelectTextComponent),
    }
  ]
})

export class SelectTextComponent extends BaseComponent implements ControlValueAccessor {

  _value = null;

  matcher = new MyErrorStateMatcher();

  _selectedItems: ISelectTextItem[] = [];

  @Input() itemsSource: ISelectTextItem[] = [];
  @Input() displayPath = '';
  @Input() valuePath = '';
  @Input() isDisabled = false;
  @Input() icon = '';

  @Input()
  set selectedItems(values: ISelectTextItem[]) {
    this._selectedItems = values;
  }

  get selectedItems(): ISelectTextItem[] {
    return this._selectedItems;
  }



  @Output() valueChanged = new EventEmitter<any>();
  @Output() textChanged = new EventEmitter<string>();

  @ViewChild('select', {static: true}) select: MatSelect;

  public selected(value: any): void {
    this.updateModel();
    this.valueChanged.emit(value);
  }

  onTextChanged(value: string): void {
    this.textChanged.emit(value);
  }

  writeValue(obj: any): void {
    this.selectedItems = obj;
  }

  updateModel(): void {
    this.onModelChange(this.selectedItems);
  }

  registerOnChange(fn: any): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onModelTouched = fn;
  }

  private onModelChange = (_: any) => {
  }

  private onModelTouched = () => {
  }


  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
