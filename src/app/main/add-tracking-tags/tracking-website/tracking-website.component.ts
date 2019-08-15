import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { AdsAccountIdPipe } from 'app/shared/pipes/ads-account-id/ads-account-id.pipe';
import { MatDialog } from '@angular/material';
import { CheckWebsiteTrackingDialogComponent } from '../check-website-tracking-dialog/check-website-tracking-dialog.component';
import { environment } from '../../../../environments/environment';
import { AddTrackingTagsService } from '../add-tracking-tags.service';

@Component({
  selector: 'app-tracking-website',
  templateUrl: './tracking-website.component.html',
  styleUrls: ['./tracking-website.component.scss']
})
export class TrackingWebsiteComponent extends PageBaseComponent implements OnInit {

  adsId: string;
  accountId: string;
  key: string;
  hostTracking: string = environment.hostTracking;

  adsAccountIdPipe = new AdsAccountIdPipe();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _matDialog: MatDialog,
    private _addTrackingTagsService: AddTrackingTagsService
  ) {
    super();
  }

  ngOnInit() {
    const sub = this._activatedRoute.params
      .subscribe((params: any) => {
        this.accountId = params.accountId;

        const detailSub = this._addTrackingTagsService.getAdwordsAccountDetail(this.accountId)
          .subscribe(res => {
            this.adsId = this.adsAccountIdPipe.transform(res.data.adsAccount.adsId);
            this.key = res.data.adsAccount.key;
          });
        this.subscriptions.push(detailSub);
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

  checkWebsiteTracking() {
    const dialogRef = this._matDialog
      .open(
        CheckWebsiteTrackingDialogComponent,
        {
          autoFocus: false,
          maxWidth: '100vw !important'
        },
      );
    return dialogRef.componentInstance.account = { accountId: this.accountId, adsId: this.adsId };
  }
}
