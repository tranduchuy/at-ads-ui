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

  displayedColumns: string[] = ['order', 'id', 'name', 'tracking'];
  campaignList: Campaign[];
  trackingCampaignList: string[];
  selectedCampaigns: string[];
  activatedAdsId: string;
  selectAllChecked: boolean;
  selectAllCheckBoxChecked: boolean;
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
    this.trackingCampaignList = [];
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
      this.selectedCampaigns = this.campaignList.map(item => item.id);
      this.selectAllChecked = true;
    } else {
      this.selectedCampaigns = [];
      this.selectAllChecked = false;
    }
  }

  onSelectCampaign(event, campaignId: string) {
    if (event.checked) {
      if (!this.selectedCampaigns.includes(campaignId)) {
        this.selectedCampaigns.push(campaignId);
      }
      else {
        this.selectedCampaigns = this.selectedCampaigns.filter(item => item !== campaignId);
      }
      if (this.campaignList.length === this.selectedCampaigns.length) {
        this.selectAllCheckBoxChecked = true;
      } else {
        this.selectAllCheckBoxChecked = false;
      }
    }
    else {
      this.selectedCampaigns = this.selectedCampaigns.filter(item => item !== campaignId);
      this.selectAllCheckBoxChecked = false;
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
        this.campaignList = res.data.campaignList;
        const sub1 = this._addTrackingTagsService.getTrackingCampaigns()
          .subscribe(res => {
            this._fuseProgressiveBarService.hide();
            this.trackingCampaignList = res.data.campaignIds;

            if (this.campaignList.every(item => this.trackingCampaignList.indexOf(item.id) >= 0)) {
              this.selectAllCheckBoxChecked = true;
              this.selectAllChecked = true;
              this.selectedCampaigns = this.campaignList.map(item => item.id);
            }
            else {
              this.selectAllCheckBoxChecked = false;
              this.selectAllChecked = false;
              this.selectedCampaigns = [];
            }

          },
            (error: HttpErrorResponse) => {
              this._fuseProgressiveBarService.hide();
              this._dialogService._openErrorDialog(error.error);
              this.trackingCampaignList = [];
            });
        this.subscriptions.push(sub1);
      },
        (error: HttpErrorResponse) => {
          if (error.error.messages) {
            this._dialogService._openErrorDialog(error.error);
            this.campaignList = [];
            this.trackingCampaignList = [];
          }
          this._fuseProgressiveBarService.hide();
        }
      );
    this.subscriptions.push(sub);
  }

  isSelectedCampaign(campaignId: string): boolean {
    return this.trackingCampaignList.includes(campaignId);
  }
}
