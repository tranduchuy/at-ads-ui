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

  public _openInfoDialog(message: string): void {
    const dialogRef = this._matDialog.open(InfoDialogComponent);
    dialogRef.componentInstance.confirmMessage = message;
  }

  public _openSuccessDialog(res: ISuccess): void {
    const dialogRef = this._matDialog.open(SuccessDialogComponent);
    dialogRef.componentInstance.messages = res.messages;
  }

  public _openErrorDialog(error: IError): void {
    const dialogRef = this._matDialog.open(ErrorDialogComponent);
    dialogRef.componentInstance.errorMessages = error.messages;
  }

  public _openConfirmDialog(message: string): Observable<boolean> {
    const dialogRef = this._matDialog.open(ConfirmDialogComponent);
    dialogRef.componentInstance.confirmMessage = message;
    return dialogRef.afterClosed();
  }
}
