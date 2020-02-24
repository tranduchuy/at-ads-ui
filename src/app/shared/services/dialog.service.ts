import { Injectable } from '@angular/core';
import { ErrorDialogComponent } from '../../dialog/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material';
import { SuccessDialogComponent } from '../../dialog/success-dialog/success-dialog.component';
import { ISuccess } from '../../dialog/models/i-success';
import { IError } from '../../dialog/models/i-error';
import { ConfirmDialogComponent } from 'app/dialog/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { InfoDialogComponent } from 'app/dialog/info-dialog/info-dialog.component';
import { ImageDialogComponent } from 'app/dialog/image-dialog/image-dialog.component';
import { CampaignDialogComponent } from 'app/dialog/campaign-dialog/campaign-dialog.component';
import { UpgradeLicenceDialogComponent } from 'app/dialog/upgrade-licence-dialog/upgrade-licence-dialog.component';
import { SelectAccountDialogComponent } from 'app/dialog/select-account-dialog/select-account-dialog.component';

interface Licence {
  name: string;
  type: string;
  price: number;
  isDiscount: boolean;
  discountMonths: number[]
}

@Injectable()
export class DialogService {

  constructor(private _matDialog: MatDialog) {
  }

  public _openInfoDialog(message: string, linkName?: string, linkUrl?: string, navigatedPage?: string, data?: any[]): void {
    const dialogRef = this._matDialog.open(InfoDialogComponent);
    dialogRef.componentInstance.confirmMessage = message;

    if (linkName !== undefined)
      dialogRef.componentInstance.linkName = linkName;

    if (linkUrl !== undefined)
      dialogRef.componentInstance.linkUrl = linkUrl;

    if (navigatedPage !== undefined)
      dialogRef.componentInstance.navigatedPage = navigatedPage;

    if (data !== undefined)
      dialogRef.componentInstance.data = data;
  }

  public _openSuccessDialog(res: ISuccess): void {
    const dialogRef = this._matDialog.open(SuccessDialogComponent);
    dialogRef.componentInstance.messages = res.messages;
  }

  public _openUpgradeLicenceDialog(licence: Licence): void {
    const dialogRef = this._matDialog.open(UpgradeLicenceDialogComponent, {
      panelClass: 'upgrade-licence-dialog',
      autoFocus: false,
      minHeight: '42vh',
    });
    dialogRef.componentInstance.licence = licence;
  }

  public _openCampaignDialog(campaigns: any) {
    const dialogRef = this._matDialog.open(CampaignDialogComponent, {
      width: '65%',
      panelClass: 'campaign-dialog'
    });
    dialogRef.componentInstance.campaigns = campaigns;
  }


  public _openSelectAccountDialog(accounts: any) {
    const dialogRef = this._matDialog.open(SelectAccountDialogComponent, {
      width: '40%',
      panelClass: 'select-account-dialog'
    });
    dialogRef.componentInstance.accounts = accounts;
  }


  public _openErrorDialog(error: IError, contact?: boolean): void {
    const dialogRef = this._matDialog.open(ErrorDialogComponent);
    dialogRef.componentInstance.errorMessages = error.messages;

    if (contact !== undefined)
      dialogRef.componentInstance.contact = contact;
  }

  public _openConfirmDialog(message: string): Observable<boolean> {
    const dialogRef = this._matDialog.open(ConfirmDialogComponent, { autoFocus: true });
    dialogRef.componentInstance.confirmMessage = message;
    return dialogRef.afterClosed();
  }

  public _openImageDialog(imgSrc: string): Observable<boolean> {
    const dialogRef = this._matDialog.open(ImageDialogComponent, {
      autoFocus: false,
      panelClass: 'image-dialog'
    });

    dialogRef.componentInstance.imgSrc = imgSrc;
    return dialogRef.afterClosed();
  }
}
