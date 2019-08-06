import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { AddTrackingTagsService } from '../add-tracking-tags.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';

@Component({
  selector: 'app-check-website-tracking-dialog',
  templateUrl: './check-website-tracking-dialog.component.html',
  styleUrls: ['./check-website-tracking-dialog.component.scss']
})
export class CheckWebsiteTrackingDialogComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['website', 'tracking'];
  websites: any = [];
  accountId: string;

  constructor(
    private dialogRef: MatDialogRef<CheckWebsiteTrackingDialogComponent>,
    private _sessionService: SessionService,
    private _addTrackingTagsService: AddTrackingTagsService,
    private _fuseProgressBarService:FuseProgressBarService,
    private _dialogService: DialogService
  ) {
    super();
  }

  ngOnInit() {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId) => {
        if (accountId) {
          this.getWebsiteTrackingInfo();
        }
      });
    this.subscriptions.push(sub);
  }

  getWebsiteTrackingInfo() {
    const sub = this._addTrackingTagsService.getWebsiteTrackingInfo(this.accountId)
      .subscribe(res => {
        this.websites = res.data.websites;
      },
        (error: HttpErrorResponse) => {
          this._dialogService._openErrorDialog(error.error);
          this.websites = [];
        });
    this.subscriptions.push(sub);
  }
}
