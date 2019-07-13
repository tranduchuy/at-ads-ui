import { Injectable } from '@angular/core';
import { ErrorDialogComponent } from '../../dialog/error-dialog/error-dialog.component';
import { MatDialog } from '@angular/material';
import { SuccessDialogComponent } from '../../dialog/success-dialog/success-dialog.component';
import { ISuccess } from '../../dialog/models/i-success';
import { IError } from '../../dialog/models/i-error';

@Injectable()
export class DialogService {

  constructor(private _matDialog: MatDialog) {
  }

  public _openSuccessDialog(res: ISuccess): void {
    const dialogRef = this._matDialog.open(SuccessDialogComponent);
    dialogRef.componentInstance.messages = res.messages;
  }

  public _openErrorDialog(error: IError): void {
    const dialogRef = this._matDialog.open(ErrorDialogComponent);
    dialogRef.componentInstance.errorMessages = error.messages;
  }
}
