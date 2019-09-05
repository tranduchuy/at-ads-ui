import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { SessionService } from 'app/shared/services/session.service';
import { ReportService } from '../report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';

@Component({
  selector: 'app-ip-detail',
  templateUrl: './ip-detail.component.html',
  styleUrls: ['./ip-detail.component.scss']
})
export class IpDetailComponent extends PageBaseComponent implements OnInit {

  ip: string;
  historyColumns: string[] = ['adwords', 'accessTime', 'device', 'os', 'browser', 'isPrivateBrowsing','keyword', 'website', 'location'];
  history = [];
  lastHistory = [];
  isProcessing: boolean = false;
  currentPageNumber: number;
  totalItems: number;
  pageTotal: number;
  pageLimit: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _fuseProgressBarService: FuseProgressBarService,
    public _sessionService: SessionService,
    private _reportService: ReportService,
    private _dialogService: DialogService
  ) {
    super();
  }

  ngOnInit() {
    const sub = this._activatedRoute.params
      .subscribe((params: any) => {

        if (params.ip) {
          this.ip = params.ip;
          const getAccountIdSub = this._sessionService.getAccountId()
            .subscribe(
              (accoundId: string) => {
                if (accoundId)
                  this.checkAccountConnection(accoundId);
              }
            );
          this.subscriptions.push(getAccountIdSub);
        }

      });
    this.subscriptions.push(sub);
  }

  checkAccountConnection(accountId: string) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.getAdwordsAccountDetail(accountId)
      .subscribe(
        res => {
          if(res.data.adsAccount.isConnected)
            this.pageLimit = 20;
          else this.pageLimit = 10;

          this.getIPHistory(this.ip, 1, this.pageLimit);

          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  getIPHistory(ip: string, page: number, limit: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.getIPHistory({ ip, page, limit })
      .subscribe(
        res => {

          this.history = res.data.history;

          this.totalItems = res.data.totalItems;
          this.pageTotal = Math.ceil(this.totalItems / this.pageLimit);

          this.lastHistory = res.data.last;

          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this.history = [];
          this.lastHistory = [];
          this.pageTotal = 0;
          this.totalItems = 0;

          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.getIPHistory(this.ip, event, this.pageLimit);
  }

}
