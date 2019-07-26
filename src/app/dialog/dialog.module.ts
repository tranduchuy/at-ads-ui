import { NgModule } from '@angular/core';
import { FlexAlignDirective, FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

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
    FlexLayoutModule
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
