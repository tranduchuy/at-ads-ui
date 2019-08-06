import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { AddTrackingTagsService } from '../add-tracking-tags.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';

@Component({
  selector: 'app-check-website-tracking-dialog',
  templateUrl: './check-website-tracking-dialog.component.html',
  styleUrls: ['./check-website-tracking-dialog.component.scss']
})
export class CheckWebsiteTrackingDialogComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['website', 'tracking'];
  websites: any = [];

  constructor(
    private dialogRef: MatDialogRef<CheckWebsiteTrackingDialogComponent>,
    private _sessionService: SessionService,
    private _addTrackingTagsService: AddTrackingTagsService,
    private _fuseSlashScreenService: FuseSplashScreenService,
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
    this._fuseSlashScreenService.show();
    const sub = this._addTrackingTagsService.getWebsiteTrackingInfo()
      .subscribe(res => {
        this._fuseSlashScreenService.hide();
        this.websites = res.data.websites;
      },
        (error: HttpErrorResponse) => {
          this._fuseSlashScreenService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.websites = [];
        });
    this.subscriptions.push(sub);
  }
}
