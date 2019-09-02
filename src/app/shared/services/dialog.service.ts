import { Injectable } from '@angular/core';
import { ErrorDialogComponent } from '../../dialog/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material';
import { SuccessDialogComponent } from '../../dialog/success-dialog/success-dialog.component';
import { ISuccess } from '../../dialog/models/i-success';
import { IError } from '../../dialog/models/i-error';
import { ConfirmDialogComponent } from 'app/dialog/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs';
import { InfoDialogComponent } from 'app/dialog/info-dialog/info-dialog.component';

@Injectable()
export class DialogService {

  constructor(private _matDialog: MatDialog) {
  }

  public _openInfoDialog(message: string, linkName?: string, linkUrl?: string): void {
    const dialogRef = this._matDialog.open(InfoDialogComponent);
    dialogRef.componentInstance.confirmMessage = message;

    if(linkName !== undefined)
      dialogRef.componentInstance.linkName = linkName;
    if(linkUrl !== undefined)
      dialogRef.componentInstance.linkUrl = linkUrl;
  }

  public _openSuccessDialog(res: ISuccess): void {
    const dialogRef = this._matDialog.open(SuccessDialogComponent);
    dialogRef.componentInstance.messages = res.messages;
  }

  public _openErrorDialog(error: IError, contact?: boolean): void {
    const dialogRef = this._matDialog.open(ErrorDialogComponent);
    dialogRef.componentInstance.errorMessages = error.messages;

    if(contact !== undefined)
      dialogRef.componentInstance.contact = contact;
  }

  public _openConfirmDialog(message: string): Observable<boolean> {
    const dialogRef = this._matDialog.open(ConfirmDialogComponent, { autoFocus: false });
    dialogRef.componentInstance.confirmMessage = message;
    return dialogRef.afterClosed();
  }
}
