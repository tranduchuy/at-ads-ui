import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { SessionService } from 'app/shared/services/session.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { ReportService } from '../report.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

@Component({
  selector: 'app-user-statistic',
  templateUrl: './user-statistic.component.html',
  styleUrls: ['./user-statistic.component.scss']
})
export class UserStatisticComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['time', 'uuid', 'clicks', 'isPrivateBrowsing', 'os', 'browser', 'network', 'location', 'keyword', 'campaignType', 'matchType', 'page', 'position'];

  locale: any = {
    format: 'DD/MM/YYYY',
    separator: ' Đến ',
    applyLabel: 'Áp dụng',
    cancelLabel: 'Đóng',
  };
  selectedDateRange: any = {
    start: moment().subtract(6, 'days').startOf('day'),
    end: moment().endOf('day')
  };
  ranges: any = {
    'Hôm nay': [moment().startOf('day'), moment().endOf('day')],
    'Hôm qua': [moment().subtract(1, 'days').startOf('day'), moment().subtract(1, 'days').endOf('day')],
    '1 tuần': [moment().subtract(6, 'days').startOf('day'), moment().endOf('day')],
  };

  dataSource = [];

  currentPageNumber: number = 0;
  pageTotal: number;
  isProcessing: boolean = false;
  totalItems: number;
  selectedAccountId: string;
  pageLimit: number = 20;

  constructor(
    public sessionService: SessionService,
    private _dialogService: DialogService,
    private _reportService: ReportService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _activatedRoute: ActivatedRoute,
    public router: Router,
    private _fuseSplashScreenService: FuseSplashScreenService
  ) {
    super();
  }

  ngOnInit() {
    this._fuseProgressBarService.show();
    const sub = this.sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.pageTotal = 0;
          this.selectedAccountId = accountId;

          const selectedActiveAccount = this.sessionService.getValueOfSelectedActiveAccount();
          if (selectedActiveAccount) {
            this.currentPageNumber = 1;
          }
          else {
            const page = this._activatedRoute.snapshot.queryParamMap.get('page');

            if (page) {
              if (isNaN(Number(page))) {
                this.currentPageNumber = 1;
              }
              else {
                this.currentPageNumber = Number(page);
              }
            }
            else {
              this.currentPageNumber = 1;
            }
          }
          this.router.navigate([], {
            queryParams: {
              page: this.currentPageNumber,
            }
          });

          this.getUserStatisticReport(accountId, this.currentPageNumber);
        }
      });
    this.subscriptions.push(sub);
  }

  generateUserStatisticReportParams(page: number) {
    const timezone = new Date().getTimezoneOffset();
    const hours = -(parseInt((timezone / 60).toString()));
    const minutes = -(timezone % 60);

    let startDate = moment(this.selectedDateRange.start).startOf('day');
    // if (hours >= 0) {
    //   startDate = startDate.add({ 'hours': hours, 'minutes': minutes });
    // }
    // else {
    //   startDate = startDate.subtract({ 'hours': -(hours), 'minutes': minutes });
    // }

    const params = {
      startDate: startDate.valueOf().toString(),
      endDate: moment(this.selectedDateRange.end).endOf('day').valueOf().toString(),
      page,
      limit: this.pageLimit
    }

    return params;
  }

  getUserStatisticReport(accountId: string, page?: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const params = this.generateUserStatisticReportParams(page);
    const sub = this._reportService.getUserStatisticReport(params, accountId)
      .subscribe(res => {
        this.dataSource = res.data.users;

        this.totalItems = res.data.meta.totalItems;
        this.pageTotal = Math.ceil(this.totalItems / this.pageLimit);

        this._fuseProgressBarService.hide();
        this._fuseSplashScreenService.hide();
        this.isProcessing = false;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.dataSource = [];
          this.pageTotal = 0;
          this.totalItems = 0;
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.getUserStatisticReport(this.selectedAccountId, event);
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
    this.getUserStatisticReport(this.selectedAccountId, this.currentPageNumber);
  }

  onSelectDateRange(event) {
    if (moment(event.endDate).diff(moment(event.startDate), 'days') + 1 > 14) {
      this._dialogService._openInfoDialog('Vui lòng chọn khoảng thời gian thống kê trong vòng 14 ngày trở lại');
      return false;
    }
    return true;
  }

  numberWithSpaces(value: string, pattern: string) {
    let i = 0, phone = value.toString();
    return pattern.replace(/#/g, (_: any) => phone[i++]);
  }
}
