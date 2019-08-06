import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { SessionService } from 'app/shared/services/session.service';
import { AdsAccountIdPipe } from 'app/shared/pipes/ads-account-id/ads-account-id.pipe';
import { MatDialogRef, MatDialog } from '@angular/material';
import { CheckWebsiteTrackingDialogComponent } from '../check-website-tracking-dialog/check-website-tracking-dialog.component';

@Component({
  selector: 'app-tracking-website',
  templateUrl: './tracking-website.component.html',
  styleUrls: ['./tracking-website.component.scss']
})
export class TrackingWebsiteComponent extends PageBaseComponent implements OnInit {

  adsId: string;
  id: string;
  key: string;

  adsAccountIdPipe = new AdsAccountIdPipe();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    //private _sessionService: SessionService,
    private _matDialog: MatDialog
  ) {
    super();
  }

  ngOnInit() {

    const sub = this._activatedRoute.params
      .subscribe((params: any) => {
        this.id = params.id;
        this.adsId = this.adsAccountIdPipe.transform(params.adsId);
        this.key = params.key;
      });
    this.subscriptions.push(sub);

  }

  copyKey(item) {
    document.addEventListener('copy', (e: ClipboardEvent) => {
      e.clipboardData.setData('text/plain', (item));
      e.preventDefault();
      document.removeEventListener('copy', null);
    });
    document.execCommand('copy');
  }

  checkWebsiteTracking(){
    const dialogRef = this._matDialog.open(CheckWebsiteTrackingDialogComponent);
    return dialogRef.componentInstance.accountId = this.id;
  }
}
