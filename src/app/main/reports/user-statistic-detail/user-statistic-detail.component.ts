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

  selectedDateRange: any = {
    start: moment().subtract(6, 'days'),
    end: moment()
  };
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

        this.getUserStatisticDetail(this.uuid, this.currentPageNumber, this.pageLimit);
      });
    this.subscriptions.push(sub);
  }

  getUserStatisticDetail(id: string, page: number, limit: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const startDate = moment(this.selectedDateRange.start).format('DD-MM-YYYY');
    const endDate = moment(this.selectedDateRange.end).format('DD-MM-YYYY');

    const sub = this._reportService.getUserStatisticDetail({ id, startDate, endDate, page, limit })
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
    this.getUserStatisticDetail(this.uuid, event, this.pageLimit);
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
    this.getUserStatisticDetail(this.uuid, this.currentPageNumber, this.pageLimit);
  }
}

