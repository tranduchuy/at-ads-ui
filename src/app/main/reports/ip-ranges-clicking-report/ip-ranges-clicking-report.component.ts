import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { SessionService } from 'app/shared/services/session.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { ReportService } from '../report.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ip-ranges-clicking-report',
  templateUrl: './ip-ranges-clicking-report.component.html',
  styleUrls: ['./ip-ranges-clicking-report.component.scss']
})
export class IpRangesClickingReportComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['time', 'ip', 'clicks', 'location', 'network'];

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
  pageLimit: number = 20;

  constructor(
    public _sessionService: SessionService,
    private _dialogService: DialogService,
    private _reportService: ReportService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    super();
  }

  ngOnInit() {
    this._fuseProgressBarService.show();
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
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

          this.getClassDClickingReport(this.currentPageNumber);
        }
      });
    this.subscriptions.push(sub);
  }

  generateClassDClickingReportParams(page: number) {
    const params = {
      from: new Date(this.selectedDateRange.start).getTime().toString(),
      to: new Date(this.selectedDateRange.end).getTime().toString(),
      page,
      limit: this.pageLimit
    };

    return params;
  }

  getClassDClickingReport(page: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const params = this.generateClassDClickingReportParams(page);
    const sub = this._reportService.getClassDClickingReport(params)
      .subscribe(res => {

        this.dataSource = res.data.rangeIps;

        setTimeout(() => {
          this.pageTotal = Math.ceil(res.data.totalItems / this.pageLimit);
          this.totalItems = res.data.totalItems;
          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        }, 0);
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
    this.getClassDClickingReport(event);
    this._router.navigate([], {
      queryParams: {
        page: event,
      }
    });
  }

  onSelectDateRange(event) {
    if (moment(event.endDate).diff(moment(event.startDate), 'days') + 1 > 14) {
      this._dialogService._openInfoDialog('Vui lòng chọn khoảng thời gian thống kê trong vòng 14 ngày trở lại');
      return false;
    }
    return true;
  }

  onApplyDateRange() {
    this.currentPageNumber = 1;
    this._router.navigate([], {
      queryParams: {
        page: this.currentPageNumber,
      }
    });
    this.getClassDClickingReport(this.currentPageNumber);
  }
}
