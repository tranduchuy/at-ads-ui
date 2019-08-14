import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { SessionService } from 'app/shared/services/session.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { ReportService } from '../report.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-ip-ranges-clicking-report',
  templateUrl: './ip-ranges-clicking-report.component.html',
  styleUrls: ['./ip-ranges-clicking-report.component.scss']
})
export class IpRangesClickingReportComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['time', 'ip', 'clicks', 'keyword', 'location', 'network'];

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

  dataSource = [];

  currentPageNumber: number = 0;
  pageTotal: number;
  isProcessing: boolean = false;

  constructor(
    public _sessionService: SessionService,
    private _dialogService: DialogService,
    private _reportService: ReportService,
    private _fuseProgressBarService: FuseProgressBarService
  ) {
    super();
  }

  ngOnInit() {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId)
          this.getClassDClickingReport(1);
      });
    this.subscriptions.push(sub);
  }

  getClassDClickingReport(page: number) {

    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const start = moment(this.selectedDateRange.start).format('DD-MM-YYYY');
    const end = moment(this.selectedDateRange.end).format('DD-MM-YYYY');

    const sub = this._reportService.getClassDClickingReport({ from: start, to: end, page, limit: 10 })
      .subscribe(res => {

        this.dataSource = res.data.rangeIps;
        this.pageTotal = Math.ceil(res.data.totalItems / 10);

        if (this.pageTotal > 0)
          this.currentPageNumber = 1;

        setTimeout(() => {
          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        }, 0);
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.dataSource = [];
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.getClassDClickingReport(event);
  }

  onApplyDateRange(event) {
    if (moment(event.endDate).diff(moment(event.startDate), 'days') + 1 > 60) {
      this._dialogService._openInfoDialog('Vui lòng chọn khoảng thời gian thống kê trong vòng 60 ngày trở lại');
      return false;
    }
    return true;
  }
}