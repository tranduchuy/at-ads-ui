import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { AddTrackingTagsService } from '../add-tracking-tags.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';

export interface AdwordsAccount {
  accountId: string;
  adsId: string;
}

@Component({
  selector: 'app-check-website-tracking-dialog',
  templateUrl: './check-website-tracking-dialog.component.html',
  styleUrls: ['./check-website-tracking-dialog.component.scss']
})
export class CheckWebsiteTrackingDialogComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['order', 'website', 'tracking'];
  websites: any = [];
  account: AdwordsAccount;

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
    this.getWebsiteTrackingInfo();
  }

  getWebsiteTrackingInfo() {
    setTimeout(() => {
      this._fuseProgressBarService.show();
    }, 0);
    const sub = this._addTrackingTagsService.getWebsiteTrackingInfo(this.account.accountId)
      .subscribe(res => {
        this.websites = res.data.websites;

        this._fuseProgressBarService.hide();
      },
        (error: HttpErrorResponse) => {
          this.websites = [];
          this._fuseProgressBarService.hide();
          
          if (error.status === 404) {
            const data = [];
            data['select-campaign'] = { 
              accountId: this.account.accountId,
              adsId: this.account.adsId
            };

            this._dialogService._openInfoDialog(
              'Tài khoản bạn chọn hiện chưa có chiến dịch nào được gắn tracking. Vui lòng gắn tracking chiến dịch ',
              '', '', 'select-campaign', data
            );
          }
          else this._dialogService._openErrorDialog(error.error);

          this.dialogRef.close();
        });
    this.subscriptions.push(sub);
  }
}
