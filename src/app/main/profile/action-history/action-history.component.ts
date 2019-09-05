import { Component, OnInit } from '@angular/core';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { ProfileService } from '../profile.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';

export interface History {
  createdAt: Date;
  content: string;
}

@Component({
  selector: 'app-action-history',
  templateUrl: './action-history.component.html',
  styleUrls: ['./action-history.component.scss']
})
export class ActionHistoryComponent extends PageBaseComponent implements OnInit {

  history: History[] = [];
  historyColumns = ['datetime', 'action'];
  currentPageNumber: number;
  pageTotal: number;
  totalItems: number;
  isProcessing: boolean;

  constructor(
    private _profileService: ProfileService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _dialogService: DialogService
  ) {
    super();
  }

  ngOnInit() {
    this.getActionHistory(1);
  }

  getActionHistory(page: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const limit = 20;

    const sub = this._profileService.getActionHistory({ page, limit })
      .subscribe(
        res => {

          this.history = (res.data.entries || []).map(item => {
            return {
              createdAt: item.actionInfo.createdAt,
              content: item.actionInfo.content
            };
          });

          this.totalItems = res.data.totalItems;
          this.pageTotal = Math.ceil(this.totalItems / limit);

          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this.isProcessing = false;
          this.history = [];
          this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.getActionHistory(event);
  }

}
