import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { SessionService } from 'app/shared/services/session.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { ReportService } from '../report.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-statistic',
  templateUrl: './user-statistic.component.html',
  styleUrls: ['./user-statistic.component.scss']
})
export class UserStatisticComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['time', 'uuid', 'clicks', 'isPrivateBrowsing', 'os', 'browser', 'network', 'location'];

  selectedDateRange: any = {
    start: moment().subtract(6, 'days'),
    end: moment()
  }
  locale: any = {
    format: 'DD/MM/YYYY',
    separator: ' Đến ',
    applyLabel: 'Áp dụng',
    cancelLabel: 'Đóng',
  };
  ranges: any = {
    'Hôm nay': [moment(), moment()],
    'Hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    '1 tuần': [moment().subtract(6, 'days'), moment()],
  }

  dataSource = [];

  currentPageNumber: number = 0;
  pageTotal: number;
  isProcessing: boolean = false;
  totalItems: number;
  selectedAccountId: string;
  pageLimit: number = 10;

  constructor(
    public _sessionService: SessionService,
    private _dialogService: DialogService,
    private _reportService: ReportService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
    super();
  }

  ngOnInit() {
    this._fuseProgressBarService.show();
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.pageTotal = 0;
          this.selectedAccountId = accountId;

          const page = this._activatedRoute.snapshot.queryParamMap.get('page');

          if (page) {
            if (isNaN(Number(page)))
              return;
            this.currentPageNumber = Number(page);
          }
          else {
            this.currentPageNumber = 1;
            this.router.navigate([], {
              queryParams: {
                page: this.currentPageNumber,
              }
            });
          }

          this.getStatisticUserReport(accountId, this.currentPageNumber);
        }
      });
    this.subscriptions.push(sub);
  }

  generateStatisticUserReportParams(page: number) {
    const params = {
      startDate: new Date(this.selectedDateRange.start).getTime().toString(),
      endDate: new Date(this.selectedDateRange.end).getTime().toString(),
      page,
      limit: this.pageLimit
    };

    return params;
  }

  getStatisticUserReport(accountId: string, page?: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const params = this.generateStatisticUserReportParams(page);
    const sub = this._reportService.getStatisticUserReport(params, accountId)
      .subscribe(res => {

        this.dataSource = res.data.users;

        this.totalItems = res.data.meta.totalItems;
        this.pageTotal = Math.ceil(this.totalItems / this.pageLimit);

        this._fuseProgressBarService.hide();
        this.isProcessing = false;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.dataSource = [];
          this.pageTotal = 0;
          this.totalItems = 0;
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.getStatisticUserReport(this.selectedAccountId, event);
    this.router.navigate([], {
      queryParams: {
        page: event,
      }
    });
  }

  onApplyDateRange() {
    this.currentPageNumber = 1;
    this.router.navigate([], {
      queryParams: {
        page: this.currentPageNumber,
      }
    });
    this.getStatisticUserReport(this.selectedAccountId, this.currentPageNumber);
  }

  onSelectDateRange(event) {
    if (moment(event.endDate).diff(moment(event.startDate), 'days') + 1 > 14) {
      this._dialogService._openInfoDialog('Vui lòng chọn khoảng thời gian thống kê trong vòng 14 ngày trở lại');
      return false;
    }
    return true;
  }
}
