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

interface SelectedWebsite {
  id: string;
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

  TRAFFIC_SOURCE_TYPES: string[] = [
    'google/cpc',
    'google/organic',
    'google/display',
    'facebook/cpc',
    'facebook/referral',
    'bing/cpc',
    'bing/organic',
    'coccoc/cpc',
    'coccoc/organic',
    'direct/none',
    'other/referral'
  ];

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

  overviewTableCols: string[] = ['createdAt', 'ip', 'trafficSource', 'session', 'status', 'os', 'browser', 'isPrivateBrowsing', 'networkCompany', 'location'];
  overviewTable = [];
  itemsPerPageOptions = Generals.Pagination.itemsPerPageOptions;

  pieChart = {
    legend: true,
    explodeSlices: false,
    labels: true,
    doughnut: false,
    gradient: false,
    scheme: {
      domain: [
        '#87CEEB', '#f44336', '#039be5', '#ADFF2F', '#FF1493', '#44b543', '#FFD700', '#008080', '#FFA07A', '#8B008B', '#D3D3D3',
        //'#6FAAB0','#C4C24A','#8BC652', '#E94649','#F6B53F','#FB954F','#005277','#039be5','#9370DB', '#33495D', '#FF6384'
        //'rgba(51, 169, 234)','rgba(51, 169, 234, 1)','rgba(51, 169, 234, 0.9)','rgba(51, 169, 234, 0.8)','rgba(51, 169, 234, 0.7)','rgba(51, 169, 234, 0.6)','rgba(51, 169, 234, 0.5)','rgba(51, 169, 234, 0.4)','rgba(51, 169, 234, 0.3)','rgba(51, 169, 234, 0.1)','rgba(51, 169, 234, 0)'
        //'hsl(200, 100%, 12%)','hsl(200, 100%, 18%)','hsl(200, 100%, 25%)','hsl(200, 100%, 35%)','hsl(200, 100%, 45%)','hsl(200, 100%, 55%)','hsl(200, 100%, 65%)','hsl(200, 100%, 75%)','hsl(200, 100%, 85%)','hsl(200, 100%, 95%)','hsl(200, 100%, 100%)'
      ]
    },
    dataSource: [],
  };

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
    public _sessionService: SessionService,
    private _activatedRoute: ActivatedRoute,
    public router: Router,
    private _websiteManagementService: WebsiteManagementService

  ) {
    super();
  }

  ngOnInit() {
    this.pageLimit = this.itemsPerPageOptions[0].value;
    this.isProcessing = true;
    this._fuseProgressBarService.show();
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.getWebsites(accountId);
        }
      });
    this.subscriptions.push(sub);

    this.pieChart.labels = window.innerWidth > 600;
  }

  getReport() {
    this._fuseProgressBarService.show();
    this.pageTotal = 0;
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
          this._fuseProgressBarService.hide();
          this.isProcessing = false;
          this._dialogService._openInfoDialog(
            'Tài khoản chưa có website nào. Vui lòng thêm',
            'tại đây',
            `/quan-ly-website/${this._sessionService.activeAccountId}`
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
  }

  showReason(reason: any) {
    if (reason)
      console.log(reason.message);
    else console.log('Unknown');
  }

  getPercentage(value: number, total: number): number {
    const res = value * 100 / total;
    return Math.round(res * 100) / 100;
  }

  generateSessionReportParams(page: number) {
    const params = {
      from: new Date(this.selectedDateRange.start).getTime().toString(),
      to: new Date(this.selectedDateRange.end).getTime().toString(),
      website: this.websiteCtrl.value ? (this.websiteCtrl.value.id !== 'VIEW_ALL' ? this.websiteCtrl.value.id : null) : null,
      page,
      limit: this.pageLimit
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

          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this.pageTotal = 0;
          this.overviewTable = [];
          this._fuseProgressBarService.hide();
          this.isProcessing = false;
          this._dialogService._openErrorDialog(error.error);
        }
      );
    this.subscriptions.push(sub);
  }

  generateStatisticTrafficSourceReportParams() {
    const params = {
      from: new Date(this.selectedDateRange.start).getTime().toString(),
      to: new Date(this.selectedDateRange.end).getTime().toString(),
      website: this.websiteCtrl.value ? (this.websiteCtrl.value.id !== 'VIEW_ALL' ? this.websiteCtrl.value.id : null) : null
    }

    if (!params.website)
      delete params.website;

    return params;
  }

  getStatisticTrafficSourceReport() {
    this.isProcessing = true;
    const params = this.generateStatisticTrafficSourceReportParams();
    const sub = this._reportService.getStatisticTrafficSourceReport(params)
      .subscribe(
        res => {
          //let data = JSON.parse(JSON.stringify(res.data.TrafficSourceData));

          let data = [
            { _id: 10, sessionCount: 174 },
            { _id: 1, sessionCount: 96 },
            { _id: 11, sessionCount: 53 },
            { _id: 2, sessionCount: 34 },
            { _id: 3, sessionCount: 12 },
            { _id: 9, sessionCount: 2 },
            { _id: 5, sessionCount: 1 },
          ]

          let sessionCountTotal = 0;
          data.forEach(element => {
            sessionCountTotal += element.sessionCount
          });

          const noIDs = data.filter(item => !item);
          let noIDSessionCountTotal = 0;
          noIDs.forEach(element => {
            noIDSessionCountTotal += element.sessionCount;
          });

          data = data.filter(item => item);
          const len = data.length;
          const dataSource = data.map((item, index) => {
            const sessionCount = index < len - 1 ? item.sessionCount : (item.sessionCount + noIDSessionCountTotal)
            return {
              name: (this.TRAFFIC_SOURCE_TYPES[item._id - 1] || 'Unknown') + ` - Số phiên ${sessionCount}`,
              value: this.getPercentage(sessionCount, sessionCountTotal)
            }
          });

          this.pieChart.dataSource = dataSource;
          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this.pieChart.dataSource = [];
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
  }
}
