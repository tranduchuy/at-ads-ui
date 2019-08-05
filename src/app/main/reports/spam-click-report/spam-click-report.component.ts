import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';

@Component({
  selector: 'app-spam-click-report',
  templateUrl: './spam-click-report.component.html',
  styleUrls: ['./spam-click-report.component.scss'],
})
export class SpamClickReportComponent extends PageBaseComponent implements OnInit {

  pieChart: any = {};
  lineChart: any = {};

  selectedDateRange: any = {
    start: moment().subtract(6, 'days'),
    end: moment()
  }

  dateRangeOptions: any = {
    'Hôm nay': [moment(), moment()],
    'Hôm qua': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
    '7 ngày trước': [moment().subtract(6, 'days'), moment()],
    '30 ngày trước': [moment().subtract(29, 'days'), moment()],
    'Tháng này': [moment().startOf('month'), moment().endOf('month')],
    'Tháng trước': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
  }

  constructor(
    private _sessionService: SessionService
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
          name: 'Click thật: 712',
          value: 93.44
        },
        {
          name: 'Click ảo: 50',
          value: 6.5
        },
      ],
      onSelect: (ev) => {
        console.log(ev);
      },
      // setLabelFormatting(name): any {
      //   return `${name}`;
      // }
    };

    this.lineChart = {
      chartType: 'line',
      datasets: {
        report: [
          {
            label: 'Hợp lệ',
            data: [141, 176, 40, 99, 114, 72, 70, 141, 176, 40, 99, 114, 72, 70, 141, 176, 40, 99, 114, 72, 70, 141, 176, 40, 99, 114, 72, 70, 141, 176, 40, 99, 114, 72, 70, 141, 176, 40, 99, 114, 72, 70, 141, 176, 40, 99, 114, 72, 70, 141, 176, 40, 99, 114, 72, 70, 141, 176, 40, 99, 114, 72, 70, 141, 176, 40, 99, 114, 72, 70],
            fill: 'start'

          },
          {
            label: 'Không hợp lệ',
            data: [11, 14, 1, 12, 4, 4, 4, 11, 14, 1, 12, 4, 4, 4, 11, 14, 1, 12, 4, 4, 4, 11, 14, 1, 12, 4, 4, 4, 11, 14, 1, 12, 4, 4, 4, 11, 14, 1, 12, 4, 4, 4, 11, 14, 1, 12, 4, 4, 4, 11, 14, 1, 12, 4, 4, 4, 11, 14, 1, 12, 4, 4, 4, 11, 14, 1, 12, 4, 4, 4],
            fill: 'start'
          }
        ],
      },
      labels: ['31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06', '31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06'],
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
          // xAxes: [
          //   {
          //     grstatusLines: {
          //       display: true
          //     },
          //     ticks: {
          //       fontColor: 'rgba(0,0,0,0.54)'
          //     }
          //   }
          // ],
          // yAxes: [
          //   {
          //     grstatusLines: {
          //       tickMarkLength: 180
          //     },
          //     ticks: {
          //       stepSize: 30
          //     }
          //   }
          // ]

          xAxes: [{}],
          yAxes: [
            {
              status: 'y-axis-0',
              position: 'left',
              ticks: {
                stepSize: 30
              }
            },
            {
              status: 'y-axis-1',
              position: 'left',
              display: false,
              grstatusLines: {
                tickMarkLength: 180
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

  leftTableColumns = ['time', 'ip', 'click', 'status', 'keyword', 'location'];
  leftTable = [
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      status: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.2',
      click: 3,
      status: 'Hợp lệ',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.3',
      click: 3,
      status: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.4',
      click: 3,
      status: 'Hợp lệ',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      status: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      status: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      status: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      status: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      status: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
  ];

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

  ngOnInit() { }

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
