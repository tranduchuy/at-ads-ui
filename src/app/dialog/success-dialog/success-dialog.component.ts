import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-success-dialog',
  styleUrls: ['./success-dialog.style.scss'],
  templateUrl: './success-dialog.component.html'
})
export class SuccessDialogComponent {
  public messages: string[];

  /**
   * Constructor
   *
   * @param {MatDialogRef<FuseConfirmDialogComponent>} dialogRef
   */
  constructor(
    public dialogRef: MatDialogRef<SuccessDialogComponent>
  )
  {
  }
}
