import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spam-click-report',
  templateUrl: './spam-click-report.component.html',
  styleUrls: ['./spam-click-report.component.scss'],
})
export class SpamClickReportComponent implements OnInit {

  pieChart: any = {};
  lineChart: any = {};

  dayFrom = new Date();
  dayTo = new Date();

  constructor(

  ) {
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
          name: 'Click thật: 712 (93.44%)',
          value: 93.44
        },
        {
          name: 'Click ảo: 50 (6.5%)',
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
            label: 'Click hợp lệ',
            data: [141, 176, 40, 99, 114, 72, 70],
            fill: 'start'

          },
          {
            label: 'Click không hợp lệ',
            data: [11, 14, 1, 12, 4, 4, 4],
            fill: 'start'
          }
        ],
      },
      labels: ['31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06'],
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
            borderWidth: 2,
            hoverRadius: 4,
            hoverBorderWidth: 2
          },
          line: {
            tension: 0
          }
        },
        scales: {
          xAxes: [
            {
              gridLines: {
                display: true
              },
              ticks: {
                fontColor: 'rgba(0,0,0,0.54)'
              }
            }
          ],
          yAxes: [
            {
              gridLines: {
                tickMarkLength: 180
              },
              ticks: {
                stepSize: 30
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

  leftTableColumns = ['time', 'ip', 'click', 'id', 'keyword', 'location'];
  leftTable = [
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      id: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      id: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      id: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      id: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      id: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      id: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      id: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      id: 'Đã chặn',
      keyword: '[Robot kiểm tra]',
      location: 'Ho Chi Minh City'
    },
    {
      time: '20:27 06/06',
      ip: '192.168.1.1',
      click: 3,
      id: 'Đã chặn',
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

  private _registerCustomChartJSPlugin(): void {
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
          if (!meta.hidden) {
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
              ctx.textBaseline = 'middle';
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
