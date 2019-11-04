import { NgModule } from '@angular/core';
import { FlexAlignDirective, FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatDialogModule, MatIconModule, MatRadioModule, MatFormFieldModule } from '@angular/material';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  
import { BrowserModule } from '@angular/platform-browser';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { CampaignDialogComponent } from './campaign-dialog/campaign-dialog.component';
import { UpgradeLicenceDialogComponent } from './upgrade-licence-dialog/upgrade-licence-dialog.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FuseSharedModule } from '@fuse/shared.module';

@NgModule({
  declarations: [
    InfoDialogComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    ConfirmDialogComponent,
    ImageDialogComponent,
    CampaignDialogComponent,
    UpgradeLicenceDialogComponent
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
    MatFormFieldModule,
    MatRadioModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatRadioModule,
    ReactiveFormsModule,
    FuseSharedModule,
  ],
  entryComponents: [
    InfoDialogComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    ConfirmDialogComponent,
    ImageDialogComponent,
    CampaignDialogComponent,
    UpgradeLicenceDialogComponent
  ],
  exports: [
    InfoDialogComponent,
    ErrorDialogComponent,
    SuccessDialogComponent,
    ConfirmDialogComponent,
    ImageDialogComponent,
    CampaignDialogComponent,
    UpgradeLicenceDialogComponent,
  ]
})
export class DialogModule {

}
