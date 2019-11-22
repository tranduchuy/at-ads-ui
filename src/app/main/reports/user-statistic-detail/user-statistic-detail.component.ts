import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { SessionService } from 'app/shared/services/session.service';
import { ReportService } from '../report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import * as moment from 'moment';
import * as Url from 'url-parse';
import { PreviousRouteService } from 'app/shared/services/previous-route.service';

@Component({
  selector: 'app-user-statistic-detail',
  templateUrl: './user-statistic-detail.component.html',
  styleUrls: ['./user-statistic-detail.component.scss']
})
export class UserStatisticDetailComponent extends PageBaseComponent implements OnInit {

  uuid: string;
  shortUuid: string;
  historyColumns: string[] = ['accessTime', 'ip', 'action', 'website', 'os', 'browser', 'isPrivateBrowsing', 'location'];
  history = [];
  lastHistory: any = {
    createdAt: '',
    location: {},
    device: {}
  };
  isProcessing: boolean = false;
  currentPageNumber: number;
  totalItems: number;
  pageTotal: number;
  pageLimit: number;
  mainReportUrl: any;

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

  constructor(
    private _fuseProgressBarService: FuseProgressBarService,
    public _sessionService: SessionService,
    private _reportService: ReportService,
    private _dialogService: DialogService,
    private _activatedRoute: ActivatedRoute,
    public router: Router,
  ) {
    super();
  }

  ngOnInit() {
    this._fuseProgressBarService.show();
    const sub = this._activatedRoute.params
      .subscribe((params: any) => {
        if (params) {
          this.uuid = params.uuid;
          this.shortUuid = '*' + params.uuid.slice(-12) + '*';
          this.mainReportUrl = new Url(params.mainReportUrl);
          this.mainReportUrl.page = this.mainReportUrl.query.split('=')[1];
          this.getAccountId();
        }
      });
    this.subscriptions.push(sub);
  }

  getAccountId() {
    const getAccountIdSub = this._sessionService.getAccountId()
      .subscribe(
        (accoundId: string) => {
          if (accoundId) {
            this.checkAccountAcceptance();
          }
        }
      );
    this.subscriptions.push(getAccountIdSub);
  }

  backToMainReport() {
    this.router.navigate(['/bao-cao/thong-ke-nguoi-dung'], {
      queryParams: {
        page: this.mainReportUrl.page,
      }
    });
  }

  checkAccountAcceptance() {
    const sub = this._sessionService.getAccountAcceptance()
      .subscribe((isAccepted: boolean) => {
        this.pageTotal = 0;

        if (isAccepted === true)
          this.pageLimit = 20;
        else this.pageLimit = 10;

        const selectedActiveAccount = this._sessionService.getValueOfSelectedActiveAccount();
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

        this.getUserStatisticDetail(this.uuid, this.currentPageNumber);
      });
    this.subscriptions.push(sub);
  }

  generateUserStatisticDetailParams(uuid: string, page: number) {
    const timezone = new Date().getTimezoneOffset();
    const hours = -(parseInt((timezone / 60).toString()));
    const minutes = -(timezone % 60);

    let startDate = moment(this.selectedDateRange.start).startOf('day');
    if (hours >= 0) {
      startDate = startDate.add({ 'hours': hours, 'minutes': minutes });
    }
    else {
      startDate = startDate.subtract({ 'hours': -(hours), 'minutes': minutes });
    }

    const params = {
      id: uuid,
      startDate: startDate.valueOf().toString(),
      endDate: moment(this.selectedDateRange.end).valueOf().toString(),
      page,
      limit: this.pageLimit
    }

    return params;
  }

  getUserStatisticDetail(id: string, page: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const params = this.generateUserStatisticDetailParams(id, page);
    const sub = this._reportService.getUserStatisticDetail(params)
      .subscribe(
        res => {

          this.history = res.data.logs.map(l => {
            l.domain = l.domain.replace('http://', '').replace('https://', '');
            return l;
          });

          this.totalItems = res.data.meta.totalItems;
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
          this._dialogService._openErrorDialog(error.error);
        }
      );
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.router.navigate([], {
      queryParams: {
        page: event,
      }
    });
    this.getUserStatisticDetail(this.uuid, event);
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
    this.router.navigate([], {
      queryParams: {
        page: this.currentPageNumber,
      }
    });
    this.getUserStatisticDetail(this.uuid, this.currentPageNumber);
  }
}

