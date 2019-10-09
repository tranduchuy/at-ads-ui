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

  displayedColumns: string[] = ['order', 'id', 'name', 'status','tracking'];
  campaignList: Campaign[];
  trackingCampaignList: string[];
  selectedCampaigns: string[];
  activatedAdsId: string;
  isProcessing: boolean = false;
  checkAll: boolean;

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
    } else {
      this.selectedCampaigns = [];
    }
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
    
    this.checkAll = this.campaignList.every(item => this.selectedCampaigns.includes(item.id));
  }

  addCampaignTracking() {
    const params = {
      campaignIds: this.selectedCampaigns
    }

    this._fuseProgressiveBarService.show();
    this.isProcessing = true;
    const sub = this._addTrackingTagsService.addCampaignTracking(params)
      .subscribe((res: ILoginSuccess) => {

        this.getOriginalCampaigns();

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
