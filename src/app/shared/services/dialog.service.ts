import { Injectable } from '@angular/core';
import { IRegisterSuccess } from '../../authentication/register/models/i-register-success';
import { ErrorDialogComponent } from '../../dialog/error-dialog/error-dialog.component';
import { IRegisterError } from '../../authentication/register/models/i-register-error';
import { MatDialog } from '@angular/material';

@Injectable()
export class DialogService {

  constructor(private _matDialog: MatDialog) {
  }

  public _openSuccessDialog(res: IRegisterSuccess): void {
    const dialogRef = this._matDialog.open(ErrorDialogComponent);
    dialogRef.componentInstance.errorMessages = res.messages;
  }

  public _openErrorDialog(error: IRegisterError): void {
    const dialogRef = this._matDialog.open(ErrorDialogComponent);
    dialogRef.componentInstance.errorMessages = error.messages;
  }
}
