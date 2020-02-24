import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { SelectAccountDialogService } from './select-account-dialog.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-select-account-dialog',
  templateUrl: './select-account-dialog.component.html',
  styleUrls: ['./select-account-dialog.component.scss']
})
export class SelectAccountDialogComponent extends PageBaseComponent implements OnInit {

  accounts: any;
  selectedAccount: any;

  constructor(
    public dialogRef: MatDialogRef<SelectAccountDialogComponent>,
    private _sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _selectAccountDialogService: SelectAccountDialogService,
  ) {
    super();
    dialogRef.disableClose = true;
  }

  ngOnInit() {
    if (this.accounts.length > 0)
      this.selectedAccount = this.accounts[0];
  }

  connectAccount() {
    this._fuseProgressBarService.show();

    const sub = this._selectAccountDialogService.enableSelectedAccount(this.selectedAccount.accountId)
      .subscribe(() => {
        this.selectedAccount.isDisabled = false;
        this._sessionService.emitSelectedAccountFromExpiredUser(this.selectedAccount);
        this._fuseProgressBarService.hide();
        this.dialogRef.close(true);
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
        });
    this.subscriptions.push(sub);
  }

}

