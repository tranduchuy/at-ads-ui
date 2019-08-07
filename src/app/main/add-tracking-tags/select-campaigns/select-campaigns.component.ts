import { Component, OnInit } from '@angular/core';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';

import { AddTrackingTagsService } from '../add-tracking-tags.service';
import { Router } from '@angular/router';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { distinctUntilChanged } from 'rxjs/operators';

export interface Campaign {
  id: string;
  name: string;
}

@Component({
  selector: 'app-select-campaigns',
  templateUrl: './select-campaigns.component.html',
  styleUrls: ['./select-campaigns.component.scss']
})
export class SelectCampaignsComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['order', 'name', 'tracking'];
  campaignList: Campaign[];
  selectedCampaigns: string[];
  activatedAdsId: string;
  selectAll: boolean = false;
  isProcessing: boolean = false;

  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    private _dialogService: DialogService,
    public _sessionService: SessionService,
    private _addTrackingTagsService: AddTrackingTagsService,
    private _router: Router,
    private _fuseSlashScreenService: FuseSplashScreenService
  ) {
    super();
    this.campaignList = [];
    this.selectedCampaigns = [];
  }

  ngOnInit() {
    const sub = this._sessionService.getAccountId()
      .pipe(distinctUntilChanged())
      .subscribe((accountId: string) => {
        if (accountId) {
          this.getOriginalCampaigns();
        }
      });
    this.subscriptions.push(sub);
  }

  onSelectAllCampaign(event) {
    if (event.checked) {
      this.selectAll = true;
      this.selectedCampaigns = this.campaignList.map(item => item.id);
    } else {
      this.selectAll = false;
      this.selectedCampaigns = [];
    }
  }

  onSelectCampaign(event, campaignId: string) {
    if (event.checked) {
      if (!this.selectedCampaigns.includes(campaignId)) {
        this.selectedCampaigns.push(campaignId);
      } else {
        this.selectedCampaigns = this.selectedCampaigns.filter(item => item !== campaignId)
      }
    } else {
      this.selectedCampaigns = this.selectedCampaigns.filter(item => item !== campaignId)
    }
  }

  addCampaignTracking() {

    if (this.selectedCampaigns.length === 0) {
      this._dialogService._openErrorDialog({
        messages: ['Vui lòng lựa chọn chiến dịch']
      });
      return;
    }

    const params = {
      campaignIds: this.selectedCampaigns
    }

    this._fuseProgressiveBarService.show();
    this.isProcessing = true;
    const sub = this._addTrackingTagsService.addCampaignTracking(params)
      .subscribe((res: ILoginSuccess) => {
        this._fuseProgressiveBarService.hide();
        this._dialogService._openSuccessDialog(res);
        this.isProcessing = false;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  getOriginalCampaigns() {
    this._fuseProgressiveBarService.show();
    const sub = this._addTrackingTagsService.getOriginalCampaigns()
      .subscribe(res => {
        this._fuseProgressiveBarService.hide();
        this.campaignList = res.data.campaignList;
      },
        (error: HttpErrorResponse) => {
          if (error.error.messages) {
            this._dialogService._openErrorDialog(error.error);
            this.campaignList = [];
          }
          this._fuseProgressiveBarService.hide();
        }
      );
    this.subscriptions.push(sub);
  }
}
