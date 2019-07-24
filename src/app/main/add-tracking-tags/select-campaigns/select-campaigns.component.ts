import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';

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
export class SelectCampaignsComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['order', 'name'];
  campaignList: Campaign[];

  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _sessionService: SessionService,
    private _addTrackingTagsService: AddTrackingTagsService,
  ) {
    super();
    this.campaignList = [];
  }

  ngOnInit() {
    const sub = this._sessionService.getAdwordId()
      .subscribe((adwordId: string) => {
        if (adwordId) {
          this.getOriginalCampaigns();
        }
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
        }
        this._fuseProgressiveBarService.hide();
      }
    );
    this.subscriptions.push(sub);
  }
}
