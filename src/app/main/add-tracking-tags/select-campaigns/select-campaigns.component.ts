import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { Validators } from '@angular/forms';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from '../../../shared/services/dialog.service';
import { FuseNavigationService } from '../../../../@fuse/components/navigation/navigation.service';

import { AddTrackingTagsService } from '../add-tracking-tags.service';

export interface Campaign {
  id: string;
  name: string;
}

@Component({
  selector: 'app-select-campaigns',
  templateUrl: './select-campaigns.component.html',
  styleUrls: ['./select-campaigns.component.scss']
})
export class SelectCampaignsComponent implements OnInit {

  displayedColumns: string[] = ['order', 'name'];
  campaignList: Campaign[];

  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _fuseNavigationService: FuseNavigationService,
    private _addTrackingTagsService: AddTrackingTagsService,
  ) { }

  ngOnInit() {
    this.getOriginalCampaigns();
  }

  getOriginalCampaigns() {
    this._fuseProgressiveBarService.show();
    const sub = this._addTrackingTagsService.getOriginalCampaigns().subscribe(res => {
      this._fuseNavigationService.reloadNavigation();
      this._fuseProgressiveBarService.hide();
      this.campaignList = res.data.campaignList;
    },
      (error: HttpErrorResponse) => {
        if (error.error.messages) {
          this._dialogService._openErrorDialog(error.error);
        }
        this._fuseProgressiveBarService.hide();
        this.campaignList = [];
      }
    );
  }
}
