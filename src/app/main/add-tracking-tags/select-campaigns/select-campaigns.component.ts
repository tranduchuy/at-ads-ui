import { Component, OnInit } from '@angular/core';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { AddTrackingTagsService } from '../add-tracking-tags.service';
import { Router } from '@angular/router';
import { distinctUntilChanged } from 'rxjs/operators';
import { MatTableDataSource, MatTable } from '@angular/material';

export interface Campaign {
  id: string;
  name: string;
  status: string;
}

export interface SentCampain {
  campaignId: string;
  campaignName: string;
}

@Component({
  selector: 'app-select-campaigns',
  templateUrl: './select-campaigns.component.html',
  styleUrls: ['./select-campaigns.component.scss']
})
export class SelectCampaignsComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['order', 'id', 'name', 'status', 'tracking'];
  campaignList: Campaign[];
  trackingCampaignList: string[];
  selectedCampaigns: string[];
  activatedAdsId: string;
  isProcessing: boolean = false;
  checkAll: boolean;
  numberOfEnableCampaigns: number;

  dataSource = new MatTableDataSource(this.campaignList);

  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    private _dialogService: DialogService,
    public _sessionService: SessionService,
    private _addTrackingTagsService: AddTrackingTagsService,
    private _router: Router,
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

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onSelectAllCampaign(event) {
    if (event.checked) {
      this.selectedCampaigns = this.campaignList.map(item => item.id);
      this.selectedCampaigns = this.selectedCampaigns.filter(id => this.isEnableCampaign(id));
    }
    else {
      this.selectedCampaigns = [];
    }
  }

  isEnableCampaign(campaignId: string): boolean {
    return this.campaignList.find(item => campaignId === item.id && item.status === 'Hoạt động') !== undefined;
  }

  onSelectCampaign(event, campaignId: string) {
    if (event.checked) {
      if (!this.selectedCampaigns.includes(campaignId)) {
        this.selectedCampaigns.push(campaignId);
      }
    }
    else {
      this.selectedCampaigns = this.selectedCampaigns.filter(item => item !== campaignId);
    }
  }

  addCampaignTracking() {
    let sentCampaigns: SentCampain[] = [];

    for (const campagin of this.campaignList)
      if (this.selectedCampaigns.indexOf(campagin.id) >= 0)
        sentCampaigns.push({
          campaignId: campagin.id,
          campaignName: campagin.name || ''
        });

    const params = {
      campaigns: sentCampaigns
    };

    this._fuseProgressiveBarService.show();
    this.isProcessing = true;
    const sub = this._addTrackingTagsService.addCampaignTracking(params)
      .subscribe((res: ILoginSuccess) => {

        //this.getOriginalCampaigns();

        setTimeout(() => {
          this._dialogService._openSuccessDialog(res);
          this._fuseProgressiveBarService.hide();
          this.isProcessing = false;

          this._router.navigateByUrl(`/gan-tracking/website/${this._sessionService.activeAccountId}`);
        }, 0);
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  getOriginalCampaigns() {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._addTrackingTagsService.getOriginalCampaigns()
      .subscribe(res => {
        this.campaignList = res.data.campaignList;

        const sub1 = this._addTrackingTagsService.getTrackingCampaigns()
          .subscribe(res => {

            this.trackingCampaignList = res.data.campaignIds;
            this.selectedCampaigns = this.trackingCampaignList;

            this.checkAll = this.campaignList.every(item => this.selectedCampaigns.includes(item.id));
            this.numberOfEnableCampaigns = this.campaignList.filter(item => item.status === 'Hoạt động').length;

            this.dataSource = new MatTableDataSource(this.campaignList);

            setTimeout(() => {
              this._fuseProgressiveBarService.hide();
              this.isProcessing = false;
            }, 0);
          },
            (error: HttpErrorResponse) => {

              this.trackingCampaignList = [];

              this._fuseProgressiveBarService.hide();
              this._dialogService._openErrorDialog(error.error);
              this.isProcessing = false;
            });
        this.subscriptions.push(sub1);
      },
        (error: HttpErrorResponse) => {

          if (error.error.messages) {

            this.campaignList = [];
            this.trackingCampaignList = [];

            this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
          }
          this._fuseProgressiveBarService.hide();
        }
      );
    this.subscriptions.push(sub);
  }

  showSupportInfoDialog() {
    this._dialogService._openInfoDialog('Vui lòng liên hệ email ha@appnet.edu.vn để được hỗ trợ thêm.');
  }
}
