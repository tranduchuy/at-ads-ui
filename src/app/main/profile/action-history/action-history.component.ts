import { Component, OnInit } from '@angular/core';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { ProfileService } from '../profile.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  pageLimit: number = 20;
  isProcessing: boolean;

  constructor(
    private _profileService: ProfileService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _dialogService: DialogService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    super();
  }

  ngOnInit() {
    this.pageTotal = 0;
    const page = this._activatedRoute.snapshot.queryParamMap.get('page');

    if (page) {
      if (isNaN(Number(page)))
        return;
      this.currentPageNumber = Number(page);
    }
    else {
      this.currentPageNumber = 1;
      this._router.navigate([], {
        queryParams: {
          page: this.currentPageNumber,
        }
      });
    }

    this.getActionHistory(this.currentPageNumber);
  }

  getActionHistory(page: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._profileService.getActionHistory({ page, limit: this.pageLimit })
      .subscribe(
        res => {

          this.history = (res.data.entries || []).map(item => {
            return {
              createdAt: item.actionInfo.createdAt,
              content: item.actionInfo.content
            };
          });

          this.totalItems = res.data.totalItems;
          this.pageTotal = Math.ceil(this.totalItems / this.pageLimit);

          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
          this.history = [];
          this.pageTotal = 0;
        });
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.getActionHistory(event);
    this._router.navigate([], {
      queryParams: {
        page: event,
      }
    });
  }

}
