import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { ReportService } from '../report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spam-click-report',
  templateUrl: './spam-click-report.component.html',
  styleUrls: ['./spam-click-report.component.scss'],
})
export class SpamClickReportComponent extends PageBaseComponent implements OnInit {

  pieChart: any = {};
  lineChart: any = {};
  clickTotal: number;
  advertisementClickReportColumns = ['time', 'ip', 'status', 'keyword', 'location'];
  advertisementClickReport = [];

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

  ngOnInit() {
    const routeParamsSub = this._activatedRoute.params
      .subscribe((params: any) => {
        if (params.accountId !== undefined)
          this.getAccountReport(params.accountId);
        else {
          const sub = this._sessionService.getAccountId()
            .subscribe((accountId: string) => {
              if (accountId)
                this.getAccountReport(accountId);
            });
          this.subscriptions.push(sub);
        }
      });
    this.subscriptions.push(routeParamsSub);
  }

  getReportDates() {
    let dates = [];

    let currDate = moment(this.selectedDateRange.start).startOf('day');
    let lastDate = moment(this.selectedDateRange.end).startOf('day');

    while (currDate.add(1, 'days').diff(lastDate) < 0) {
      dates.push(moment(currDate.clone().toDate()).format('DD-MM'));
    }

    dates.unshift(moment(this.selectedDateRange.start).format('DD-MM'));
    dates.push(moment(this.selectedDateRange.end).format('DD-MM'));

    return dates;
  }

  onApplyDateRange(event) {
    if (moment(event.endDate).diff(moment(event.startDate), 'days') + 1 > 60) {
      this._dialogService._openInfoDialog('Vui lòng chọn khoảng thời gian thống kê trong vòng 60 ngày trở lại');
      return false;
    }
    return true;
  }

  getAccountReport(accountId: string) {
    this._fuseProgressBarService.show();

    const start = moment(this.selectedDateRange.start).format('DD-MM-YYYY');
    const end = moment(this.selectedDateRange.end).format('DD-MM-YYYY');

    const sub = this._reportService.getAccountReport({ from: start, to: end }, accountId)
      .subscribe(res => {
        this.clickTotal = res.data.pieChart.realClick + res.data.pieChart.spamClick;

        const realClickPercentage = res.data.pieChart.realClick * 100 / this.clickTotal;
        const spamClickPercentage = 100 - realClickPercentage;

        this.pieChart = {
          legend: false,
          explodeSlices: false,
          labels: true,
          doughnut: true,
          gradient: false,
          scheme: {
            domain: ['#039be5', '#f44336']
          },
          dataSource: [
            {
              name: 'Click thật: ' + res.data.pieChart.realClick,
              value: Math.round(realClickPercentage * 100) / 100
            },
            {
              name: 'Click ảo: ' + res.data.pieChart.spamClick,
              value: Math.round(spamClickPercentage * 100) / 100
            },
          ],
          onSelect: (ev) => {
            console.log(ev);
          },
          // setLabelFormatting(name): any {
          //   return `${name}`;
          // }
        };

        const lineChartLabels = this.getReportDates();
        const realClicks = res.data.lineChart.map(item => item.realClick);
        const spamClicks = res.data.lineChart.map(item => item.spamClick);
        const realClickDataSets = [];
        const spamClickDataSets = [];

        for (const index in lineChartLabels) {
          if (realClicks[index] !== undefined)
            realClickDataSets.push(realClicks[index]);
          else realClickDataSets.push(0);

          if (spamClicks[index] !== undefined)
            spamClickDataSets.push(spamClicks[index]);
          else spamClickDataSets.push(0);
        }


        this.lineChart = {
          chartType: 'line',
          datasets: {
            report: [
              {
                label: 'Hợp lệ',
                data: realClickDataSets,
                fill: 'start'

              },
              {
                label: 'Không hợp lệ',
                data: spamClickDataSets,
                fill: 'start'
              }
            ],
          },
          labels: lineChartLabels,
          colors: [
            {
              borderColor: '#35afea',
              backgroundColor: 'rgba(0,0,0,0)',
              pointBackgroundColor: 'white',
              pointHoverBackgroundColor: '#35afea',
              pointBorderColor: '#35afea',
              pointHoverBorderColor: '#35afea'
            },
            {
              borderColor: '#f44336',
              backgroundColor: 'rgba(0,0,0,0)',
              pointBackgroundColor: 'white',
              pointHoverBackgroundColor: '#f44336',
              pointBorderColor: '#f44336',
              pointHoverBorderColor: '#f44336'
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
                borderWstatusth: 2,
                hoverRadius: 4,
                hoverBorderWstatusth: 2
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
                    beginAtZero: true
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

        this.advertisementClickReport = res.data.lineChart.map(item => item.logs);
        this.advertisementClickReport = [].concat.apply([], this.advertisementClickReport);

        this._fuseProgressBarService.hide();
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.advertisementClickReport = [];
        });
    this.subscriptions.push(sub);
  }

  constructor(
    public _sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _reportService: ReportService,
    private _dialogService: DialogService,
    private _activatedRoute: ActivatedRoute
  ) {

    super();

    this.pieChart = {
      legend: false,
      explodeSlices: false,
      labels: true,
      doughnut: true,
      gradient: false,
      scheme: {
        domain: ['#039be5', '#f44336']
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
    };

    this.lineChart = {
      chartType: 'line',
      datasets: {
        report: [
          {
            label: '',
            data: [],
            fill: 'start'

          },
          {
            label: '',
            data: [],
            fill: 'start'
          }
        ],
      },
      labels: [],
      colors: [
        {
          borderColor: '#35afea',
          backgroundColor: 'rgba(0,0,0,0)',
          pointBackgroundColor: 'white',
          pointHoverBackgroundColor: '#35afea',
          pointBorderColor: '#35afea',
          pointHoverBorderColor: '#35afea'
        },
        {
          borderColor: '#f44336',
          backgroundColor: 'rgba(0,0,0,0)',
          pointBackgroundColor: 'white',
          pointHoverBackgroundColor: '#f44336',
          pointBorderColor: '#f44336',
          pointHoverBorderColor: '#f44336'
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
            borderWstatusth: 2,
            hoverRadius: 4,
            hoverBorderWstatusth: 2
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
                beginAtZero: true
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
  ]
}
