import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { AddTrackingTagsService } from '../add-tracking-tags.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';

@Component({
  selector: 'app-check-website-tracking-dialog',
  templateUrl: './check-website-tracking-dialog.component.html',
  styleUrls: ['./check-website-tracking-dialog.component.scss']
})
export class CheckWebsiteTrackingDialogComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['order', 'website', 'tracking'];
  websites: any = [];
  accountId: string;

  constructor(
    public dialogRef: MatDialogRef<CheckWebsiteTrackingDialogComponent>,
    public _sessionService: SessionService,
    private _addTrackingTagsService: AddTrackingTagsService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _dialogService: DialogService
  ) {
    super();
  }

  ngOnInit() {
    setTimeout(() => {
      this._fuseProgressBarService.show();
    }, 0);
    const sub = this._addTrackingTagsService.getWebsiteTrackingInfo(this.accountId)
      .subscribe(res => {
        this._fuseProgressBarService.hide();
        this.websites = res.data.websites;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.websites = [];
        });
    this.subscriptions.push(sub);
  }
}