import { Component, OnInit } from '@angular/core';
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { ReportService } from '../report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PreviousRouteService } from 'app/shared/services/previous-route.service';

@Component({
  selector: 'app-ip-clicking-report',
  templateUrl: './ip-clicking-report.component.html',
  styleUrls: ['./ip-clicking-report.component.scss']
})
export class IpClickingReportComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['time', 'ip', 'clicks', 'status', 'location', 'os', 'browser', 'isPrivateBrowsing', 'network'];

  dataSource = [];

  constructor(
    public _sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _reportService: ReportService,
    private _dialogService: DialogService,
    private _activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
    super();
  }

  isProcessing: boolean = false;
  pageTotal: number;
  currentPageNumber: number;
  totalItems: number;
  pageLimit: number = 10;

  ngOnInit() {
    this._fuseProgressBarService.show();
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.pageTotal = 0;

          const page = this._activatedRoute.snapshot.queryParamMap.get('page');

          if (page) {
            if (isNaN(Number(page))) {
              this.currentPageNumber = 1;
              this.router.navigate([], {
                queryParams: {
                  page: this.currentPageNumber,
                }
              });
            }
            else {
              this.currentPageNumber = Number(page);
            }
          }
          else {
            this.currentPageNumber = 1;
            this.router.navigate([], {
              queryParams: {
                page: this.currentPageNumber,
              }
            });
          }

          this.getDailyClickingReport(this.currentPageNumber);
        }
      });
    this.subscriptions.push(sub);
  }

  getCurrentRoute() {
    return `/bao-cao/ip-dang-click?page=${this.currentPageNumber}`;
  }

  showReason(reason: any) {
    if (reason)
      console.log(reason.message);
    else console.log('Unknown');
  }

  getDailyClickingReport(page: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.getDailyClickingReport({ page, limit: this.pageLimit })
      .subscribe(res => {
        this.dataSource = res.data.entries;

        this.pageTotal = Math.ceil(res.data.totalItems / this.pageLimit);
        this.totalItems = res.data.totalItems;

        this._fuseProgressBarService.hide();
        this.isProcessing = false;
      },
        (error: HttpErrorResponse) => {
          this.dataSource = [];
          this.pageTotal = 0;
          this.totalItems = 0;
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.getDailyClickingReport(event);
    this.router.navigate([], {
      queryParams: {
        page: event,
      }
    });
  }

}
