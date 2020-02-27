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
      domain: ['#c4e9c3', 'crimson']
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

  lineChartPoint = {
    radius: 0,
    borderWstatusth: 10,
    hoverRadius: 4,
    hoverBorderWstatusth: 10
  };

  lineChart: any = {
    chartOptions: {
      responsive: true
    },
    chartType: 'line',
    datasets: {
      report: [
        {
          label: 'Tổng số click',
          data: [],
          fill: 'start'
        },
        {
          label: 'Số click thật',
          data: [],
          fill: 'start'

        },
        {
          label: 'Số click ảo',
          data: [],
          fill: 'start'
        }
      ],
    },
    labels: [],
    colors: [
      {
        borderColor: '#039be5',
        //backgroundColor: 'rgba(3, 155, 229, 0.1)',
        backgroundColor: 'rgba(0,0,0,0)',
        pointBackgroundColor: 'white',
        pointHoverBackgroundColor: '#039be5',
        pointBorderColor: '#039be5',
        pointHoverBorderColor: '#039be5'
      },
      {
        borderColor: 'green',
        //backgroundColor: 'rgba(0, 204, 255,0.5)',
        backgroundColor: 'rgba(0,0,0,0)',
        pointBackgroundColor: 'white',
        pointHoverBackgroundColor: 'green',
        pointBorderColor: 'green',
        pointHoverBorderColor: 'green'
      },
      {
        borderColor: 'crimson',
        //backgroundColor: 'rgba(255, 0, 57, 0.4)',
        backgroundColor: 'rgba(0,0,0,0)',
        pointBackgroundColor: 'white',
        pointHoverBackgroundColor: 'crimson',
        pointBorderColor: 'crimson',
        pointHoverBorderColor: 'crimson'
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
        point: this.lineChartPoint,
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

  totalClickLineChart: any = {
    chartOptions: {
      responsive: true
    },
    chartType: 'line',
    datasets: {
      report: [
        {
          label: 'Tổng số click',
          data: [],
          fill: 'start'
        }
      ],
    },
    labels: [],
    colors: [
      {
        borderColor: '#039be5',
        backgroundColor: 'rgba(3, 155, 229, 0.1)',
        // backgroundColor: 'rgba(0,0,0,0)',
        pointBackgroundColor: 'white',
        pointHoverBackgroundColor: '#039be5',
        pointBorderColor: '#039be5',
        pointHoverBorderColor: '#039be5'
      }
    ],
    options: {
      spanGaps: false,
      legend: {
        display: false
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
        point: this.lineChartPoint,
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

  realClickLineChart: any = {
    chartOptions: {
      responsive: true
    },
    chartType: 'line',
    datasets: {
      report: [
        {
          label: 'Số click thật',
          data: [],
          fill: 'start'
        }
      ],
    },
    labels: [],
    colors: [
      {
        borderColor: 'green',
        backgroundColor: 'rgba(0, 128, 0, 0.1)',
        //backgroundColor: 'rgba(0,0,0,0)',
        pointBackgroundColor: 'white',
        pointHoverBackgroundColor: 'green',
        pointBorderColor: 'green',
        pointHoverBorderColor: 'green'
      }
    ],
    options: {
      spanGaps: false,
      legend: {
        display: false
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
        point: this.lineChartPoint,
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

  spamClickLineChart: any = {
    chartOptions: {
      responsive: true
    },
    chartType: 'line',
    datasets: {
      report: [
        {
          label: 'Số click ảo',
          data: [],
          fill: 'start'
        }
      ]
    },
    labels: [],
    colors: [
      {
        borderColor: 'crimson',
        backgroundColor: 'rgba(220, 20, 60, 0.1)',
        //backgroundColor: 'rgba(0,0,0,0)',
        pointBackgroundColor: 'white',
        pointHoverBackgroundColor: 'crimson',
        pointBorderColor: 'crimson',
        pointHoverBorderColor: 'crimson'
      }
    ],
    options: {
      spanGaps: false,
      legend: {
        display: false
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
        point: this.lineChartPoint,
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
          // let data: any = '{"pieChart":{"spamClick":141,"realClick":1359},"lineChart":[{"_id":"21-02-2020","spamClick":25,"realClick":144},{"_id":"23-02-2020","spamClick":28,"realClick":291},{"_id":"20-02-2020","spamClick":9,"realClick":150},{"_id":"22-02-2020","spamClick":20,"realClick":271},{"_id":"24-02-2020","spamClick":28,"realClick":227},{"_id":"26-02-2020","spamClick":14,"realClick":129},{"_id":"25-02-2020","spamClick":17,"realClick":147}]}';
          // data = JSON.parse(data);

          const data = res.data;

          this.clickTotal = data.pieChart.realClick + data.pieChart.spamClick;

          this.realClickTotal = data.pieChart.realClick;
          this.realClickPercentage = _.round(data.pieChart.realClick * 100 / this.clickTotal, 2) || 0;
          const realClickDetail: any = {
            name: 'Click thật: ' + this.abbreviateNumber(data.pieChart.realClick),
            value: this.realClickPercentage
          };

          this.spamClickTotal = data.pieChart.spamClick;
          this.spamClickPercentage = _.round(data.pieChart.spamClick * 100 / this.clickTotal, 2) || 0;
          const spamClickDetail: any = {
            name: 'Click ảo: ' + this.abbreviateNumber(data.pieChart.spamClick),
            value: this.spamClickPercentage
          };

          this.pieChart = {
            legend: false,
            explodeSlices: false,
            labels: false,
            doughnut: true,
            gradient: false,
            scheme: {
              domain: ['rgba(0, 128, 0, 0.8)', 'crimson']
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

          for (const item of data.lineChart)
            lineChartData[item._id] = {
              realClick: item.realClick,
              spamClick: item.spamClick
            };

          let lineChartLabels = this.getReportDates();
          const realClickDataSets = [];
          const spamClickDataSets = [];
          const totalClickDataSets = [];

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

          for (const i in realClickDataSets)
            totalClickDataSets.push(realClickDataSets[i] + spamClickDataSets[i]);

          lineChartLabels = (lineChartLabels || []).map(l => {
            const date = l.split('-');
            return `${date[0]}-${date[1]}`;
          });

          this.lineChart.labels = lineChartLabels;
          this.totalClickLineChart.labels = lineChartLabels;
          this.realClickLineChart.labels = lineChartLabels;
          this.spamClickLineChart.labels = lineChartLabels;

          this.lineChart.datasets.report[0].data = totalClickDataSets;
          this.lineChart.datasets.report[1].data = realClickDataSets;
          this.lineChart.datasets.report[2].data = spamClickDataSets;

          this.totalClickLineChart.datasets.report[0].data = totalClickDataSets;
          this.realClickLineChart.datasets.report[0].data = realClickDataSets;
          this.spamClickLineChart.datasets.report[0].data = spamClickDataSets;
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
          // let data: any = '{"logs":[{"_id":"5e5713b8fb31ad4e1c294a2a","isPrivateBrowsing":false,"isSpam":false,"uuid":"320c3b41-d104-4824-aee5-881230710802","ip":"115.73.208.64","location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":"giường gỗ sồi","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-27T00:56:24.743Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":2,"countMaxClickInHours":60},"click":2},{"_id":"5e57135efb31ad4e1c294a22","isPrivateBrowsing":false,"isSpam":false,"uuid":"320c3b41-d104-4824-aee5-881230710802","ip":"115.73.208.64","location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":"giường gỗ sồi","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-27T00:54:54.991Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":2},{"_id":"5e5707fffb31ad4e1c2949c0","isPrivateBrowsing":false,"isSpam":false,"uuid":"0324281b-2b3b-4b29-a38f-32b8dc822111","ip":"27.75.42.187","location":{"country_code":"VN","country_name":"Vietnam","city":"Bien Hoa","postal":null,"latitude":10.95,"longitude":106.8167,"state":"Tinh GJong Nai"},"keyword":"giường gỗ sồi","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-27T00:06:23.706Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":1},{"_id":"5e56f9d1fb31ad4e1c29498d","isPrivateBrowsing":false,"isSpam":false,"uuid":"c9aadb51-badc-4087-ad51-d4e55c611bbc","ip":"171.248.65.207","location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":"giường gỗ xoan","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T23:05:53.441Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":2,"countMaxClickInHours":60},"click":2},{"_id":"5e56f9b7fb31ad4e1c294989","isPrivateBrowsing":false,"isSpam":false,"uuid":"c9aadb51-badc-4087-ad51-d4e55c611bbc","ip":"171.248.65.207","location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":"giường gỗ xoan","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T23:05:27.461Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":2},{"_id":"5e569313fb31ad4e1c294809","isPrivateBrowsing":false,"isSpam":false,"uuid":"0a9905d1-157d-43c9-b29f-926a48d59640","ip":"116.109.75.17","location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":"giường ngủ gỗ xoan đào","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T15:47:31.324Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":1},{"_id":"5e567e44fb31ad4e1c294751","isPrivateBrowsing":false,"isSpam":false,"uuid":"74630fce-f666-471f-a3fe-2d5f4c8e0b43","ip":"113.23.114.241","location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":"giường ngủ gỗ sồi","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T14:18:44.552Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":1},{"_id":"5e567c40fb31ad4e1c29472b","isPrivateBrowsing":false,"isSpam":false,"uuid":"ab34ea19-326f-463a-abba-586cc233f22c","ip":"171.239.167.123","location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":"giuong go xoan","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T14:10:08.604Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":1},{"_id":"5e567bf3fb31ad4e1c294727","isPrivateBrowsing":false,"isSpam":false,"uuid":"c6e942d1-7358-4c49-baf7-89398172e110","ip":"14.187.26.245","location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":"giường ngủ gỗ sồi","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T14:08:51.845Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":1},{"_id":"5e567b50fb31ad4e1c29471b","isPrivateBrowsing":false,"isSpam":false,"uuid":"a9650f3c-9636-43c7-9eaa-96589b9e8725","ip":"1.53.217.180","location":{"country_code":"VN","country_name":"Vietnam","city":null,"postal":null,"latitude":16,"longitude":106,"state":null},"keyword":"giường ngủ gỗ xoan","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T14:06:08.281Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":1},{"_id":"5e5679e4fb31ad4e1c294705","isPrivateBrowsing":false,"isSpam":false,"uuid":"caf77f3c-0f50-46f2-8cfc-116864b583f4","ip":"183.80.220.57","location":{"country_code":"VN","country_name":"Vietnam","city":"Thu Duc","postal":null,"latitude":10.85,"longitude":106.75,"state":"Ho Chi Minh"},"keyword":"giường ngủ gỗ xoan đào","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T14:00:04.407Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":2,"countMaxClickInHours":60},"click":2},{"_id":"5e5677dffb31ad4e1c2946f1","isPrivateBrowsing":false,"isSpam":false,"uuid":"caf77f3c-0f50-46f2-8cfc-116864b583f4","ip":"183.80.220.57","location":{"country_code":"VN","country_name":"Vietnam","city":"Thu Duc","postal":null,"latitude":10.85,"longitude":106.75,"state":"Ho Chi Minh"},"keyword":"giường ngủ gỗ xoan đào","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T13:51:27.666Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":2},{"_id":"5e566f50fb31ad4e1c29467a","isPrivateBrowsing":false,"isSpam":false,"uuid":"0e799f5b-8eca-4f43-a258-91ca7d0ec113","ip":"113.23.29.149","location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":"giường gỗ sồi","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T13:14:56.152Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":1},{"_id":"5e566e92fb31ad4e1c29466f","isPrivateBrowsing":false,"isSpam":false,"uuid":"6aaba55d-4f0d-49fb-adbc-1d20abfb0169","ip":"103.199.41.14","location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":"giường gỗ sồi","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T13:11:46.239Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":1},{"_id":"5e56654afb31ad4e1c294644","isPrivateBrowsing":false,"isSpam":false,"uuid":"8b6296cd-f2de-408b-9113-82e027bff952","ip":"171.254.207.63","location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":"giường ngủ gỗ sồi","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T12:32:10.722Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":2,"countMaxClickInHours":60},"click":2},{"_id":"5e566528fb31ad4e1c294642","isPrivateBrowsing":false,"isSpam":false,"uuid":"ffe5af58-2038-4cbb-9c16-45738aeb7532","ip":"1.55.45.137","location":{"country_code":"VN","country_name":"Vietnam","city":"Hanoi","postal":null,"latitude":21.0333,"longitude":105.85,"state":"Hanoi"},"keyword":"mau giuong go dep","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T12:31:36.422Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":1},{"_id":"5e566517fb31ad4e1c29463e","isPrivateBrowsing":false,"isSpam":false,"uuid":"8b6296cd-f2de-408b-9113-82e027bff952","ip":"171.254.207.63","location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":"giường ngủ gỗ sồi","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T12:31:19.545Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":2},{"_id":"5e566054fb31ad4e1c294620","isPrivateBrowsing":false,"isSpam":false,"uuid":"8862ae0d-15f2-4298-896a-3c61ae6e502d","ip":"14.186.112.4","location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":"giường gỗ sồi","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T12:11:00.639Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":1},{"_id":"5e565ff5fb31ad4e1c29461d","isPrivateBrowsing":false,"isSpam":false,"uuid":"edcea1a9-f1d7-453d-98d7-121ed476b003","ip":"103.199.54.151","location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":"giường ngủ gỗ xoan đào","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T12:09:25.528Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":2,"countMaxClickInHours":60},"click":2},{"_id":"5e565fcffb31ad4e1c294619","isPrivateBrowsing":false,"isSpam":false,"uuid":"edcea1a9-f1d7-453d-98d7-121ed476b003","ip":"103.199.54.151","location":{"country_code":"VN","country_name":"Vietnam","city":"Ho Chi Minh City","postal":null,"latitude":10.8142,"longitude":106.6438,"state":"Ho Chi Minh"},"keyword":"giường ngủ gỗ xoan đào","matchType":"Cụm từ","page":null,"position":null,"campaignType":"Google search","gclid":null,"createdAt":"2020-02-26T12:08:47.825Z","reason":{"message":"Số lượng click của ip nhỏ hơn giới hạn click cho phép.","clickNumber":1,"countMaxClickInHours":60},"click":2}],"totalItems":357}';
          // data = JSON.parse(data);

          const data = res.data;
          
          this.advertisementClickReport = data.logs;

          this.totalItems = data.totalItems;
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
