import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { DialogService } from 'app/shared/services/dialog.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { ReportService } from '../report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SessionService } from 'app/shared/services/session.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Generals } from '../../../shared/constants/generals';
import { ReplaySubject, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import * as _ from 'lodash';
import { WebsiteManagementService } from 'app/main/website-management/website-management.service';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

interface SelectedWebsite {
  id: string;
  name: string;
}

interface TrafficSourceType {
  id: number;
  name: string;
}

@Component({
  selector: 'app-overview-report',
  templateUrl: './overview-report.component.html',
  styleUrls: ['./overview-report.component.scss']
})
export class OverviewReportComponent extends PageBaseComponent implements OnInit {

  isProcessing: boolean = false;
  pageTotal: number;
  currentPageNumber: number;
  totalItems: number;
  pageLimit: number;
  sessionTotal: number;

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

  overviewTableCols: string[] = ['createdAt', 'ip', 'trafficSource', 'session', 'status', 'os', 'browser', 'isPrivateBrowsing', 'networkCompany', 'location', 'keyword', 'campaignType', 'matchType', 'page', 'position'];
  overviewTable = [];
  itemsPerPageOptions = Generals.Pagination.itemsPerPageOptions;

  pieChart = {
    legend: false,
    explodeSlices: false,
    labels: true,
    doughnut: true,
    gradient: false,
    view: [],
    scheme: {
      domain: [
        //'#87CEEB', '#f44336', '#40a5ec', '#ADFF2F', '#FF1493', '#44b543', '#FFD700', '#008080', '#FFA07A', '#8B008B', '#D3D3D3',
        //'#6FAAB0', '#C4C24A', '#8BC652', '#E94649', '#F6B53F', '#FB954F', '#005277', '#40a5ec', '#9370DB', '#33495D', '#FF6384'
        'hsl(200, 100%, 12%)', 'hsl(200, 100%, 20%)', 'hsl(200, 100%, 29%)', 'hsl(200, 100%, 36%)', 'hsl(200, 100%, 45%)', 'hsl(200, 100%, 54%)', 'hsl(200, 100%, 63%)', 'hsl(200, 100%, 72%)', 'hsl(200, 100%, 81%)', 'hsl(200, 100%, 90%)', 'hsl(200, 100%, 95%)'
      ]
    },
    dataSource: [],
    heightClass: ''
  };

  TRAFFIC_SOURCE_TYPES: TrafficSourceType[] = Generals.TrafficSourceReport.TRAFFIC_SOURCE_TYPES;

  websites: SelectedWebsite[] = [];
  hasWebsite: boolean;

  /** control for selected website */
  public websiteCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword */
  public websiteFilterCtrl: FormControl = new FormControl();

  /** list of websites filterd by search keyword */
  public filteredWebsites: ReplaySubject<any[]> = new ReplaySubject<SelectedWebsite[]>(1);

  @ViewChild('singleSelect', { static: true }) singleSelect: MatSelect;

  private _onDestroy = new Subject<void>();

  constructor(
    private _dialogService: DialogService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _reportService: ReportService,
    public sessionService: SessionService,
    private _activatedRoute: ActivatedRoute,
    public router: Router,
    private _websiteManagementService: WebsiteManagementService,
    private _fuseSplashScreenService: FuseSplashScreenService

  ) {
    super();
  }

  ngOnInit() {
    this.pageLimit = this.itemsPerPageOptions[0].value;
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const sub = this.sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.getWebsites(accountId);
        }
      });
    this.subscriptions.push(sub);

    this.pieChart.labels = window.innerWidth > 600;

    if (window.innerWidth > 600) {
      this.pieChart.labels = true;
      this.pieChart.heightClass = 'h-300';
    } else {
      this.pieChart.labels = false;
      this.pieChart.heightClass = 'h-200';
    }
  }

  getReport() {
    this._fuseProgressBarService.show();
    this.pageTotal = 0;

    const selectedActiveAccount = this.sessionService.getValueOfSelectedActiveAccount();
    if (selectedActiveAccount) {
      this.currentPageNumber = 1;
      this.pageLimit = this.itemsPerPageOptions[0].value;
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

    this.getStatisticTrafficSourceReport();
    this.getSessionReport(this.currentPageNumber);
  }

  getWebsites(accountId: string) {
    const sub = this._websiteManagementService.getWebsites(accountId)
      .subscribe(res => {
        this.websites = (res.data.website || []).map(website => {
          return {
            id: website._id,
            name: website.domain
          } as SelectedWebsite
        });

        if (this.websites.length > 0) {
          this.hasWebsite = true;
          this.websites.unshift({
            id: 'VIEW_ALL',
            name: 'Tất cả website'
          } as SelectedWebsite);

          // load the initial account list
          this.filteredWebsites.next(this.websites.slice());

          // listen for search field value changes
          this.websiteFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
              this.filterWebsites();
            });

          // set default option is the first item of list websites
          this.websiteCtrl.setValue(this.websites[0]);

          this.getReport();
        }
        else {
          this.pieChart.dataSource = [];
          this.overviewTable = [];
          this.hasWebsite = false;
          this.pageTotal = 0;
          this.isProcessing = false;
          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this._dialogService._openInfoDialog(
            'Tài khoản chưa có website nào. Vui lòng thêm',
            'tại đây',
            `/quan-ly-website/${this.sessionService.activeAccountId}`
          )
        }
      });
    this.subscriptions.push(sub);
  }

  selectWebsite(): void {
    const selectedId = this.websiteCtrl.value.id;
    const selectedIndex = _.findIndex(this.websites, website => website.id === selectedId);
    this.websiteCtrl.setValue(this.websites[selectedIndex]);
    this.getReport();
  }

  private filterWebsites(): void {
    if (!this.websites) {
      return;
    }
    // get the search keyword
    let search = this.websiteFilterCtrl.value;
    if (!search) {
      this.filteredWebsites.next(this.websites.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the websites
    this.filteredWebsites.next(
      this.websites.filter(website => website.name.toLowerCase().indexOf(search) > -1)
    );
  }

  changeItemsPerPageOption(e) {
    this.currentPageNumber = 1;
    this.router.navigate([], {
      queryParams: {
        page: this.currentPageNumber,
      }
    });
    this.getSessionReport(this.currentPageNumber);
    this.sessionService.emitReportTableChanged(2);
  }

  showReason(reason: any) {
    if (reason)
      console.log(reason.message);
    else console.log('Unknown');
  }

  generateSessionReportParams(page: number) {
    // const timezone = new Date().getTimezoneOffset();
    // const hours = -(parseInt((timezone / 60).toString()));
    // const minutes = -(timezone % 60);

    let startDate = moment(this.selectedDateRange.start).startOf('day');
    // if (hours >= 0) {
    //   startDate = startDate.add({ 'hours': hours, 'minutes': minutes });
    // }
    // else {
    //   startDate = startDate.subtract({ 'hours': -(hours), 'minutes': minutes });
    // }

    const params = {
      from: startDate.valueOf().toString(),
      to: moment(this.selectedDateRange.end).endOf('day').valueOf().toString(),
      page,
      limit: this.pageLimit,
      website: this.websiteCtrl.value ? (this.websiteCtrl.value.id !== 'VIEW_ALL' ? this.websiteCtrl.value.id : null) : null
    }

    if (!params.website)
      delete params.website;

    return params;
  }

  getSessionReport(page: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const params = this.generateSessionReportParams(page);
    const sub = this._reportService.getSessionReport(params)
      .subscribe(
        res => {
          this.overviewTable = res.data.trafficSourceData;
          this.totalItems = res.data.totalItems;
          this.pageTotal = Math.ceil(this.totalItems / this.pageLimit);

          for (const item of this.overviewTable) {
            if (item.trafficSource) {
              const itemTrafficSourceId = item.trafficSource;
              const itemOriginalTrafficSource: TrafficSourceType = _.find(this.TRAFFIC_SOURCE_TYPES, src => src.id === itemTrafficSourceId);

              if (itemOriginalTrafficSource) {
                item['trafficSourceName'] = itemOriginalTrafficSource.name;
              } else {
                item['trafficSourceName'] = 'other/referral';
              }
            } else {
              item['trafficSourceName'] = 'other/referral';
            }
          }

          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this.pageTotal = 0;
          this.overviewTable = [];
          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this.isProcessing = false;
          this._dialogService._openErrorDialog(error.error);
        }
      );
    this.subscriptions.push(sub);
  }

  generateStatisticTrafficSourceReportParams() {
    const timezone = new Date().getTimezoneOffset();
    // const hours = -(parseInt((timezone / 60).toString()));
    // const minutes = -(timezone % 60);

    let startDate = moment(this.selectedDateRange.start).startOf('day');
    // if (hours >= 0) {
    //   startDate = startDate.add({ 'hours': hours, 'minutes': minutes });
    // }
    // else {
    //   startDate = startDate.subtract({ 'hours': -(hours), 'minutes': minutes });
    // }

    const params = {
      from: startDate.valueOf().toString(),
      to: moment(this.selectedDateRange.end).endOf('day').valueOf().toString(),
      website: this.websiteCtrl.value ? (this.websiteCtrl.value.id !== 'VIEW_ALL' ? this.websiteCtrl.value.id : null) : null
    }

    if (!params.website)
      delete params.website;

    return params;
  }

  abbreviateNumber(number: number): string | number {
    const SI_POSTFIXES: string[] = ["", "k", "M", "B", "T", "P", "E"];
    const tier = Math.log10(Math.abs(number)) / 3 | 0;

    if (tier == 0)
      return number;

    const postfix = SI_POSTFIXES[tier];
    const scale = Math.pow(10, tier * 3);
    const scaled = number / scale;
    let formatted = scaled.toFixed(1) + '';

    if (/\.0$/.test(formatted))
      formatted = formatted.substr(0, formatted.length - 2);

    return formatted + postfix;
  }

  getStatisticTrafficSourceReport() {
    this.isProcessing = true;
    const params = this.generateStatisticTrafficSourceReportParams();
    const sub = this._reportService.getStatisticTrafficSourceReport(params)
      .subscribe(
        res => {
          let data = JSON.parse(JSON.stringify(res.data.TrafficSourceData));

          // let data = [
          //   { _id: 1, sessionCount: 100 },
          //   { _id: 2, sessionCount: 100 },
          //   { _id: 3, sessionCount: 100 },
          //   { _id: 4, sessionCount: 100 },
          //   { _id: 5, sessionCount: 100 },
          //   { _id: 6, sessionCount: 100 },
          //   { _id: 7, sessionCount: 100 },
          //   { _id: 8, sessionCount: 100 },
          //   { _id: 9, sessionCount: 100 },
          //   { _id: 10, sessionCount: 100 },
          //   { _id: 11, sessionCount: 100 },
          // ];

          let sessionCountTotal = 0;
          data.forEach(element => {
            sessionCountTotal += element.sessionCount
          });

          this.sessionTotal = sessionCountTotal;

          // Get total of NO_ID Source's session count
          const noIDs = data.filter(item => !item._id);
          let noIDSessionCountTotal = 0;
          noIDs.forEach(element => {
            noIDSessionCountTotal += element.sessionCount;
          });

          const otherSource = _.find(this.TRAFFIC_SOURCE_TYPES, src => src.name === 'other/referral');

          if (otherSource) {
            const otherSourceId = otherSource.id;

            if (otherSourceId >= 0 && noIDSessionCountTotal > 0) {
              const otherSource = _.find(data, src => src._id === otherSourceId);

              if (otherSource) {
                otherSource.sessionCount += noIDSessionCountTotal;
              } else {
                const otherSource = {
                  _id: otherSourceId,
                  sessionCount: noIDSessionCountTotal
                };
                data.push(otherSource);
              }
            }
          }

          data = data.filter(item => item._id);
          const dataSource = [];

          for (const item of data) {
            const sessionCount = item.sessionCount;

            if (item._id && sessionCount > 0) {
              const itemOriginalTrafficSource = _.find(this.TRAFFIC_SOURCE_TYPES, src => src.id === item._id);

              if (itemOriginalTrafficSource) {
                const dataSourceItem = {
                  name: itemOriginalTrafficSource.name
                    + ': ' + this.abbreviateNumber(sessionCount) + ' phiên'
                    + ` (${_.round(sessionCount * 100 / this.sessionTotal, 2) || 0}%)`,
                  value: _.round(sessionCount * 100 / this.sessionTotal, 2) || 0
                };
                dataSource.push(dataSourceItem);
              }
            }
          }

          this.pieChart.dataSource = _.sortBy(dataSource, 'value').reverse();
          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this.pieChart.dataSource = [];
          this.sessionTotal = 0;
          this.isProcessing = false;
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
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
    this.getStatisticTrafficSourceReport();
    this.getSessionReport(this.currentPageNumber);
  }

  changePage(event) {
    this.getSessionReport(event);
    this.router.navigate([], {
      queryParams: {
        page: event,
      }
    });
    this.sessionService.emitReportTableChanged(1);
  }
}
