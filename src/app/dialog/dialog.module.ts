import { NgModule } from '@angular/core';
import { FlexAlignDirective, FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDialogModule } from '@angular/material';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    InfoDialogComponent,
    ErrorDialogComponent
  ],
  providers: [],
  imports: [
    MatButtonModule,
    MatDialogModule,
    FlexLayoutModule
  ],
  entryComponents: [
    InfoDialogComponent,
    ErrorDialogComponent
  ],
  exports: [
    InfoDialogComponent,
    ErrorDialogComponent
  ]
})
export class DialogModule {

}
