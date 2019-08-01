import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';

import { AddTrackingTagsService } from '../add-tracking-tags.service';
import { Router } from '@angular/router';

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

  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _sessionService: SessionService,
    private _addTrackingTagsService: AddTrackingTagsService,
    private _router: Router
  ) {
    super();
    this.campaignList = [];
    this.selectedCampaigns = [];
  }

  ngOnInit() {
    const sub = this._sessionService.getAdwordId()
      .subscribe((adwordId: string) => {
        if (adwordId) {
          this.getOriginalCampaigns();
        } else {
          this._dialogService._openInfoDialog('Vui lòng kết nối tài khoản AdWords');
          this._router.navigateByUrl('/them-tai-khoan-moi');
        }
      });

    this.subscriptions.push(sub);
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
    const sub = this._addTrackingTagsService.addCampaignTracking(params)
      .subscribe((res: ILoginSuccess) => {
        this._fuseProgressiveBarService.hide();
        this._dialogService._openSuccessDialog(res);
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
  }

  getOriginalCampaigns() {
    this._fuseProgressiveBarService.show();
    const sub = this._addTrackingTagsService.getOriginalCampaigns().subscribe(res => {
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
