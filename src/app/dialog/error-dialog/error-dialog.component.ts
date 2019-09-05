import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-error-dialog',
  templateUrl: './error-dialog.component.html'
})
export class ErrorDialogComponent {
  public errorMessages: string[];
  public contact: boolean = false;

  /**
   * Constructor
   *
   * @param {MatDialogRef<FuseConfirmDialogComponent>} dialogRef
   */
  constructor(
    public dialogRef: MatDialogRef<ErrorDialogComponent>
  )
  {}
}
