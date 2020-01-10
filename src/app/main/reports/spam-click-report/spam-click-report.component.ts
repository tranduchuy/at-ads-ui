import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { ReportService } from '../report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdsAccountIdPipe } from 'app/shared/pipes/ads-account-id/ads-account-id.pipe';
import { Generals } from 'app/shared/constants/generals';
import * as _ from 'lodash';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { MatSelect } from '@angular/material';
import { takeUntil } from 'rxjs/operators';
import { WebsiteManagementService } from 'app/main/website-management/website-management.service';

interface SelectedWebsite {
  id: string;
  name: string;
}

@Component({
  selector: 'app-spam-click-report',
  templateUrl: './spam-click-report.component.html',
  styleUrls: ['./spam-click-report.component.scss'],
})
export class SpamClickReportComponent extends PageBaseComponent implements OnInit {
  clickTotal: number;
  advertisementClickReportColumns = ['time', 'ip', 'click', 'status', 'location', 'isPrivateBrowsing', 'keyword', 'campaignType', 'matchType', 'page', 'position'];
  advertisementClickReport = [];
  pageTotal: number;
  currentPageNumber: number;
  totalItems: number;
  selectedAccountId: string;
  pageLimit: number = 20;
  realClickTotal: number = 0;
  realClickPercentage: number = 0;
  spamClickTotal: number = 0;
  spamClickPercentage: number = 0;
  isProcessing: boolean;

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

  itemsPerPageOptions = Generals.Pagination.itemsPerPageOptions;

  selectedAdsId: string;

  adsAccountIdPipe = new AdsAccountIdPipe();

  pieChart: any = {
    legend: false,
    explodeSlices: false,
    labels: false,
    doughnut: true,
    gradient: false,
    scheme: {
      domain: ['#44b543', 'crimson']
    },
    dataSource: [
      {
        name: '',
        value: 0
      },
      {
        name: '',
        value: 0
      },
    ],
    onSelect: (ev) => {
      //console.log(ev);
    },
    // setLabelFormatting(name): any {
    //   return `${name}`;
    // }
  };

  lineChart: any = {
    chartOptions: {
      responsive: true
    },
    chartType: 'line',
    datasets: {
      report: [
        {
          label: 'Click thật',
          data: [],
          fill: 'start'

        },
        {
          label: 'Click ảo',
          data: [],
          fill: 'start'
        }
      ],
    },
    labels: [],
    colors: [
      {
        borderColor: '#00bf4f',
        //backgroundColor: 'rgba(0, 204, 255,0.5)',
        backgroundColor: 'rgba(0,0,0,0)',
        pointBackgroundColor: 'green',
        pointHoverBackgroundColor: 'green',
        pointBorderColor: 'white',
        pointHoverBorderColor: 'white'
      },
      {
        borderColor: 'lightcoral',
        //backgroundColor: 'rgba(255, 0, 57, 0.4)',
        backgroundColor: 'rgba(0,0,0,0)',
        pointBackgroundColor: 'crimson',
        pointHoverBackgroundColor: 'crimson',
        pointBorderColor: 'white',
        pointHoverBorderColor: 'white'
      }
    ],
    options: {
      spanGaps: false,
      legend: {
        display: true
      },
      maintainAspectRatio: false,
      tooltips: {
        position: 'nearest',
        mode: 'index',
        intersect: false
      },
      layout: {
        padding: {
          left: 24,
          right: 32,
          top: 20
        }
      },
      elements: {
        point: {
          radius: 4,
          borderWstatusth: 10,
          hoverRadius: 4,
          hoverBorderWstatusth: 10
        },
        line: {
          tension: 0
        }
      },
      scales: {
        xAxes: [{}],
        yAxes: [
          {
            status: 'y-axis-0',
            position: 'left',
            ticks: {
              beginAtZero: true,
            }
          }
        ]
      },
      plugins: {
        filler: {
          propagate: false
        }
      }
    }
  }

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

  constructor(
    public sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _reportService: ReportService,
    private _dialogService: DialogService,
    private _activatedRoute: ActivatedRoute,
    public router: Router,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _websiteManagementService: WebsiteManagementService
  ) {
    super();
  };

  rightTableColumns = ['order', 'time', 'phone', 'network'];
  rightTable = [
    {
      time: '19:40 06/06',
      phone: '0908xxx191',
      network: 'VNPT'
    },
    {
      time: '19:40 06/06',
      phone: '0908xxx191',
      network: 'VNPT'
    },
    {
      time: '19:40 06/06',
      phone: '0908xxx191',
      network: 'VNPT'
    },
    {
      time: '19:40 06/06',
      phone: '0908xxx191',
      network: 'VNPT'
    },
    {
      time: '19:40 06/06',
      phone: '0908xxx191',
      network: 'VNPT'
    },
    {
      time: '19:40 06/06',
      phone: '0908xxx191',
      network: 'VNPT'
    },
    {
      time: '19:40 06/06',
      phone: '0908xxx191',
      network: 'VNPT'
    },
    {
      time: '19:40 06/06',
      phone: '0908xxx191',
      network: 'VNPT'
    },
    {
      time: '19:40 06/06',
      phone: '0908xxx191',
      network: 'VNPT'
    },
  ];

  ngOnInit() {
    //this.sessionService.completeConfigStep(Generals.AccountConfigStep.SEE_REPORT.value);
    this._fuseProgressBarService.show();
    this.pageLimit = this.itemsPerPageOptions[0].value;

    const getAccountId = this.sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.getWebsites(accountId);
        }
      });
    this.subscriptions.push(getAccountId);

    if (window.innerWidth < 600) {
      this.lineChart.options.layout = {
        left: 10,
        right: 10,
        top: 0
      };
    }
  }

  getReport(accountId: string) {
    this.pageTotal = 0;
    this.selectedAccountId = accountId;
    this.setSelectedAdsId(accountId);
    this.getAccountStatisticReport(accountId);

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

    this.getAccountReport(accountId, this.currentPageNumber)
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

          this.getReport(accountId);
        }
        else {
          this.pieChart.dataSource = [];
          this.advertisementClickReport = [];
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
    this.getReport(this.sessionService.activeAccountId);
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

  showReason(reason: any) {
    if (reason)
      console.log(reason.message);
    else console.log('Unknown');
  }

  changePage(event) {
    this.getAccountReport(this.selectedAccountId, event);
    this.router.navigate([], {
      queryParams: {
        page: event,
      }
    });
    this.sessionService.emitReportTableChanged(1);
  }

  setSelectedAdsId(accountId: string) {
    const sub = this._reportService.getAdwordsAccountDetail(accountId)
      .subscribe(res => {
        this.selectedAdsId = this.adsAccountIdPipe.transform(res.data.adsAccount.adsId);
      });
    this.subscriptions.push(sub);
  }

  getReportDates() {
    let dates = [];

    let currDate = moment(this.selectedDateRange.start).startOf('day');
    let lastDate = moment(this.selectedDateRange.end).startOf('day');

    while (currDate.add(1, 'days').diff(lastDate) < 0) {
      dates.push(moment(currDate.clone().toDate()).format('DD-MM-YYYY'));
    }

    dates.unshift(moment(this.selectedDateRange.start).format('DD-MM-YYYY'));
    dates.push(moment(this.selectedDateRange.end).format('DD-MM-YYYY'));

    return dates;
  }

  onSelectDateRange(event) {
    if (moment(event.endDate).diff(moment(event.startDate), 'days') + 1 > 14) {
      this._dialogService._openInfoDialog('Vui lòng chọn khoảng thời gian thống kê trong vòng 14 ngày trở lại');
      return false;
    }
    return true;
  }

  changeItemsPerPageOption(e) {
    this.currentPageNumber = 1;
    this.router.navigate([], {
      queryParams: {
        page: this.currentPageNumber,
      }
    });
    this.getAccountReport(this.sessionService.activeAccountId, this.currentPageNumber);
    this.sessionService.emitReportTableChanged(2);
  }

  onApplyDateRange() {
    this.currentPageNumber = 1;
    this.router.navigate([], {
      queryParams: {
        page: this.currentPageNumber,
      }
    });
    this.getAccountStatisticReport(this.sessionService.activeAccountId);
    this.getAccountReport(this.sessionService.activeAccountId, this.currentPageNumber);
  }

  generateAccountStatisticReportParams() {
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
      from: startDate.valueOf().toString(),
      to: moment(this.selectedDateRange.end).endOf('day').valueOf().toString(),
      timeZone: moment().format('Z'),
      website: this.websiteCtrl.value ? (this.websiteCtrl.value.id !== 'VIEW_ALL' ? this.websiteCtrl.value.id : null) : null
    }

    return params;
  }

  getAccountStatisticReport(accountId: string) {
    this._fuseProgressBarService.show();
    const params = this.generateAccountStatisticReportParams();
    const sub = this._reportService.getAccountStatisticReport(params, accountId)
      .subscribe(
        res => {
          this.clickTotal = res.data.pieChart.realClick + res.data.pieChart.spamClick;

          this.realClickTotal = res.data.pieChart.realClick;
          this.realClickPercentage = _.round(res.data.pieChart.realClick * 100 / this.clickTotal, 2) || 0;
          const realClickDetail: any = {
            name: 'Click thật: ' + this.abbreviateNumber(res.data.pieChart.realClick),
            value: this.realClickPercentage
          };

          this.spamClickTotal = res.data.pieChart.spamClick;
          this.spamClickPercentage = _.round(res.data.pieChart.spamClick * 100 / this.clickTotal, 2) || 0;
          const spamClickDetail: any = {
            name: 'Click ảo: ' + this.abbreviateNumber(res.data.pieChart.spamClick),
            value: this.spamClickPercentage
          };

          this.pieChart = {
            legend: false,
            explodeSlices: false,
            labels: false,
            doughnut: true,
            gradient: false,
            scheme: {
              domain: ['#00bf4f', '#ff5757']
            },
            dataSource: [
              realClickDetail, spamClickDetail
            ],
            onSelect: (ev) => {
              //console.log(ev);
            },
            // setLabelFormatting(name): any {
            //   return `${name}`;
            // }
          };

          let lineChartData = [];

          for (const item of res.data.lineChart)
            lineChartData[item._id] = {
              realClick: item.realClick,
              spamClick: item.spamClick
            };

          const lineChartLabels = this.getReportDates();
          const realClickDataSets = [];
          const spamClickDataSets = [];

          lineChartLabels.forEach((item, index) => {
            if (lineChartData[item] !== undefined) {
              realClickDataSets[index] = lineChartData[item].realClick;
              spamClickDataSets[index] = lineChartData[item].spamClick;
            }
            else {
              realClickDataSets[index] = 0;
              spamClickDataSets[index] = 0;
            }
          });

          this.lineChart.labels = lineChartLabels;
          this.lineChart.datasets.report[0].data = realClickDataSets;
          this.lineChart.datasets.report[1].data = spamClickDataSets;
        },
        (error: HttpErrorResponse) => {
          this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
  }

  generateAccountReportParams(page: number) {

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
      from: startDate.valueOf().toString(),
      to: moment(this.selectedDateRange.end).endOf('day').valueOf().toString(),
      page,
      limit: this.pageLimit,
      website: this.websiteCtrl.value ? (this.websiteCtrl.value.id !== 'VIEW_ALL' ? this.websiteCtrl.value.id : null) : null
    }

    return params;
  }

  getAccountReport(accountId: string, page?: number) {
    const params = this.generateAccountReportParams(page);
    const sub = this._reportService.getAccountReport(params, accountId)
      .subscribe(
        res => {
          this.advertisementClickReport = res.data.logs;

          this.totalItems = res.data.totalItems;
          this.pageTotal = Math.ceil(this.totalItems / this.pageLimit);

          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this.isProcessing = false;
          this._dialogService._openErrorDialog(error.error);
          this.advertisementClickReport = [];
          this.totalItems = 0;
          this.pageTotal = 0;
        }
      );
    this.subscriptions.push(sub);
  }
}
