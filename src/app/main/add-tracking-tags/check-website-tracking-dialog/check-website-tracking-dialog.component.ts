import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { SessionService } from 'app/shared/services/session.service';
import { AddTrackingTagsService } from '../add-tracking-tags.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import * as _ from 'lodash';
import { Generals } from 'app/shared/constants/generals';

export interface AdwordsAccount {
  accountId: string;
  adsId: string;
}

@Component({
  selector: 'app-check-website-tracking-dialog',
  templateUrl: './check-website-tracking-dialog.component.html',
  styleUrls: ['./check-website-tracking-dialog.component.scss']
})
export class CheckWebsiteTrackingDialogComponent extends PageBaseComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['order', 'website', 'tracking'];
  websites: any = [];
  account: AdwordsAccount;
  isProcessing: boolean = false;

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

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.getWebsiteTrackingInfo();
    }, 0);
  }

  getWebsiteTrackingInfo() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const sub = this._addTrackingTagsService.getWebsiteTrackingInfo(this.account.accountId)
      .subscribe(res => {
        this.websites = res.data.websites;
        if (this.websites.length > 0 && this._sessionService.getValueOfDoneConfigStep() < Generals.AccountConfigStep.ADD_TRACKING.value) {
          const websiteOnTracking = _.find(this.websites, website => website.isTracking === true);
          if (websiteOnTracking) {
            this._sessionService.completeConfigStep(Generals.AccountConfigStep.ADD_TRACKING.value);
          }
        }
        this.isProcessing = false;
        this._fuseProgressBarService.hide();
      },
        (error: HttpErrorResponse) => {
          this.websites = [];

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

          this._fuseProgressBarService.hide();
          this.isProcessing = false;
          this.dialogRef.close();
        });
    this.subscriptions.push(sub);
  }

  closeDialog() {
    this.isProcessing = false;
    this._fuseProgressBarService.hide();
    this.dialogRef.close(true);
  }
}
