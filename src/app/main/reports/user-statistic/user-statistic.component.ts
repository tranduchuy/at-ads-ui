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
    private _router: Router
  ) {
    super();
  }

  ngOnInit() {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.pageTotal = 0;
          this.selectedAccountId = accountId;

          const page = this._activatedRoute.snapshot.queryParamMap.get('page');

          if (page) {
            if(isNaN(Number(page)))
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

          this.getStatisticUserReport(accountId, this.currentPageNumber);
        }
      });
    this.subscriptions.push(sub);
  }

  getStatisticUserReport(accountId: string, page?: number) {

    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const start = moment(this.selectedDateRange.start).format('DD-MM-YYYY');
    const end = moment(this.selectedDateRange.end).format('DD-MM-YYYY');

    const sub = this._reportService.getStatisticUserReport({ startDate: start, endDate: end, page, limit: this.pageLimit }, accountId)
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
    this._router.navigate([], {
      queryParams: {
        page: event,
      }
    });
  }

  onApplyDateRange() {
    this.currentPageNumber = 1;
    this._router.navigate([], {
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
