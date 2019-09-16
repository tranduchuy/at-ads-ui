import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { SessionService } from 'app/shared/services/session.service';
import { ReportService } from '../report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import * as moment from 'moment';

@Component({
  selector: 'app-user-statistic-detail',
  templateUrl: './user-statistic-detail.component.html',
  styleUrls: ['./user-statistic-detail.component.scss']
})
export class UserStatisticDetailComponent extends PageBaseComponent implements OnInit {

  uuid: string;
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

        if (params.uuid) {
          this.uuid = params.uuid;
          const getAccountIdSub = this._sessionService.getAccountId()
            .subscribe(
              (accoundId: string) => {
                if (accoundId) {
                  this.checkAccountConnection(accoundId);
                }
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
          if (res.data.adsAccount.isConnected) {
            this.pageLimit = 20;
          } else {
            this.pageLimit = 10;
          }

          this.getUserStatisticDetail(this.uuid, 1, this.pageLimit);

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
    this.getUserStatisticDetail(this.uuid, event, this.pageLimit);
  }

  onApplyDateRange(event) {
    if (moment(event.endDate).diff(moment(event.startDate), 'days') + 1 > 14) {
      this._dialogService._openInfoDialog('Vui lòng chọn khoảng thời gian thống kê trong vòng 14 ngày trở lại');
      return false;
    }
    return true;
  }

}

