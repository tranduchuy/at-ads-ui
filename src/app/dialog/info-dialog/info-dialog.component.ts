import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { Router } from '@angular/router';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';

@Component({
  selector: 'app-info-dialog',
  templateUrl: './info-dialog.component.html',
})
export class InfoDialogComponent {

  public confirmMessage: string;
  public linkUrl?: string = '';
  public linkName?: string = '';
  public data?: any[] = [];
  public navigatedPage?: string;

  /**
   * Constructor
   *
   * @param {MatDialogRef<FuseConfirmDialogComponent>} dialogRef
   */
  constructor(
    public dialogRef: MatDialogRef<InfoDialogComponent>,
    private _sessionService: SessionService,
    private _router: Router,
    private _fuseNavigationService: FuseNavigationService,
  ) {
  }

  navigateToSelectCampaign() {
    const account = this.data['select-campaign'];

    //set account to be on activated
    // this._sessionService.setActiveAccountId(account.accountId);
    // this._sessionService.setActiveAdsAccountId(account.adsId);
    // this._sessionService.setAccountId(account.accountId);
    // this._sessionService.setAdwordId(account.adsId);
    // this._fuseNavigationService.reloadNavigation();
    this._sessionService.setActiveGoogleAdsAccount(account.accountId, account.adsId);

    this._router.navigateByUrl('/gan-tracking/chien-dich');
    this.dialogRef.close();
  }
}
