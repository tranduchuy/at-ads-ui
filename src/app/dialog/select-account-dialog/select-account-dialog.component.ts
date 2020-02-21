import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { AdsAccountIdPipe } from 'app/shared/pipes/ads-account-id/ads-account-id.pipe';

@Component({
  selector: 'app-select-account-dialog',
  templateUrl: './select-account-dialog.component.html',
  styleUrls: ['./select-account-dialog.component.scss']
})
export class SelectAccountDialogComponent implements OnInit {

  accounts: any;
  selectedAccount: any;

  constructor(
    public dialogRef: MatDialogRef<SelectAccountDialogComponent>,
  ) { 
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    if (this.accounts.length > 0)
      this.selectedAccount = this.accounts[0];
  }

}

