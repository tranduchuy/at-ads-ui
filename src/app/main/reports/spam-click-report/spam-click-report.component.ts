import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { ReportService } from '../report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';

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
  dateRangeOptions: any = {
    'Hôm nay': [moment(), moment()],
    'Hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    '7 ngày trước': [moment().subtract(6, 'days'), moment()],
    '30 ngày trước': [moment().subtract(29, 'days'), moment()],
    'Tháng này': [moment().startOf('month'), moment().endOf('month')],
    'Tháng trước': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }

  ngOnInit() {

    this._fuseProgressBarService.show();
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this._fuseProgressBarService.hide();
          this.getAccountReport();
        }
      });
    this.subscriptions.push(sub);
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
    if(moment(event.endDate).diff(moment(event.startDate), 'days') + 1 > 60) {
      this._dialogService._openInfoDialog('Vui lòng chọn khoảng thời gian thống kê trong vòng 60 ngày trở lại');
      return false;
    }
    this.getAccountReport();
    return true;
  }

  getAccountReport() {
    this._fuseProgressBarService.show();

    const start = moment(this.selectedDateRange.start).format('DD-MM-YYYY');
    const end = moment(this.selectedDateRange.end).format('DD-MM-YYYY');

    const sub = this._reportService.getAccountReport({ from: start, to: end })
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
        });
    this.subscriptions.push(sub);
  }

  constructor(
    public _sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _reportService: ReportService,
    private _dialogService: DialogService
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

    //this._registerCustomChartJSPlugin();
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

  private _registerCustomChartJSPlugin() {
    (window as any).Chart.plugins.register({
      afterDatasetsDraw: function (chart, easing): any {
        // Only activate the plugin if it's made available
        // in the options
        if (
          !chart.options.plugins.xLabelsOnTop ||
          (chart.options.plugins.xLabelsOnTop && chart.options.plugins.xLabelsOnTop.active === false)
        ) {
          return;
        }

        // To only draw at the end of animation, check for easing === 1
        const ctx = chart.ctx;

        chart.data.datasets.forEach(function (dataset, i): any {
          const meta = chart.getDatasetMeta(i);
          if (!meta.hstatusden) {
            meta.data.forEach(function (element, index): any {

              // Draw the text in black, with the specified font
              ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
              const fontSize = 13;
              const fontStyle = 'normal';
              const fontFamily = 'Roboto, Helvetica Neue, Arial';
              ctx.font = (window as any).Chart.helpers.fontString(fontSize, fontStyle, fontFamily);

              // Just naively convert to string for now
              const dataString = dataset.data[index].toString();

              // Make sure alignment settings are correct
              ctx.textAlign = 'center';
              ctx.textBaseline = 'mstatusdle';
              const padding = 15;
              const startY = 24;
              const position = element.tooltipPosition();
              ctx.fillText(dataString, position.x, startY);

              ctx.save();

              ctx.beginPath();
              ctx.setLineDash([5, 3]);
              ctx.moveTo(position.x, startY + padding);
              ctx.lineTo(position.x, position.y - padding);
              ctx.strokeStyle = 'rgba(255,255,255,0.12)';
              ctx.stroke();

              ctx.restore();
            });
          }
        });
      }
    });
  }
}
