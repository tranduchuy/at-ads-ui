import { NgModule } from '@angular/core';
import { FlexAlignDirective, FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDialogModule, MatIconModule } from '@angular/material';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    InfoDialogComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    ConfirmDialogComponent
  ],
  providers: [],
  imports: [
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule,
    MatIconModule,
    RouterModule,
    BrowserModule,
    CommonModule,
  ],
  entryComponents: [
    InfoDialogComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    ConfirmDialogComponent,
  ],
  exports: [
    InfoDialogComponent,
    ErrorDialogComponent,
    SuccessDialogComponent
  ]
})
export class DialogModule {

}
