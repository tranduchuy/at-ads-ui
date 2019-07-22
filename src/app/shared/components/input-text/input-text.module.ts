import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './input-text.component';
import {
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  ErrorStateMatcher,
  ShowOnDirtyErrorStateMatcher, MatFormFieldControl
} from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    InputTextComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule
  ],
  exports: [
    InputTextComponent
  ],
  providers: [
    {provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher},
    {provide: MatFormFieldControl, useExisting: InputTextComponent}
  ]
})
export class InputTextModule {

}
