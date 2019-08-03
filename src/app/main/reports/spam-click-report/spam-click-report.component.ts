import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spam-click-report',
  templateUrl: './spam-click-report.component.html',
  styleUrls: ['./spam-click-report.component.scss'],
})
export class SpamClickReportComponent implements OnInit {

  pieChart: any = {};
  lineChart: any = {};

  lineChartOption: string = 'invalidClick';

  onChangeLineChartOption(event) {
    this.lineChartOption = event.value;
    if (event.value === 'invalidClick') {
      this.lineChart = {
        chartType: 'line',
        datasets: {
          validClick: [
            {
              label: 'Click hợp lệ',
              data: [141, 176, 40, 99, 114, 72, 70],
              fill: 'start'
            }
          ],
          invalidClick: [
            {
              label: 'Click không hợp lệ',
              data: [116, 85, 133, 12, 120, 10, 150],
              fill: 'start'
            }
          ],
        },
        labels: ['31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06'],
        colors: [
          {
            borderColor: '#f44336',
            backgroundColor: '#1e88e5',
            pointBackgroundColor: '#1e88e5',
            pointHoverBackgroundColor: '#1e88e5',
            pointBorderColor: '#ffffff',
            pointHoverBorderColor: '#ffffff'
          }
        ],
        options: {
          spanGaps: false,
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 32,
              left: 32,
              right: 32
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
                  display: false,
                  drawBorder: false,
                  tickMarkLength: 18
                },
                ticks: {
                  fontColor: '#ffffff'
                }
              }
            ],
            yAxes: [
              {
                display: false,
                ticks: {
                  min: 0,
                  max: 180,
                  stepSize: 1
                }
              }
            ]
          },
          plugins: {
            filler: {
              propagate: false
            },
            xLabelsOnTop: {
              active: true
            }
          }
        }
      }
    }
    else {
      this.lineChart = {
        chartType: 'line',
        datasets: {
          validClick: [
            {
              label: 'Click hợp lệ',
              data: [141, 176, 40, 99, 114, 72, 70],
              fill: 'start'
            }
          ],
          invalidClick: [
            {
              label: 'Click không hợp lệ',
              data: [116, 85, 133, 12, 120, 10, 150],
              fill: 'start'
            }
          ],
        },
        labels: ['31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06'],
        colors: [
          {
            borderColor: '#42a5f5',
            backgroundColor: '#1e88e5',
            pointBackgroundColor: '#1e88e5',
            pointHoverBackgroundColor: '#1e88e5',
            pointBorderColor: '#ffffff',
            pointHoverBorderColor: '#ffffff'
          }
        ],
        options: {
          spanGaps: false,
          legend: {
            display: false
          },
          maintainAspectRatio: false,
          layout: {
            padding: {
              top: 32,
              left: 32,
              right: 32
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
                  display: false,
                  drawBorder: false,
                  tickMarkLength: 18
                },
                ticks: {
                  fontColor: '#ffffff'
                }
              }
            ],
            yAxes: [
              {
                display: false,
                ticks: {
                  min: 0,
                  max: 180,
                  stepSize: 1
                }
              }
            ]
          },
          plugins: {
            filler: {
              propagate: false
            },
            xLabelsOnTop: {
              active: true
            }
          }
        }
      }
    }
  }

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
        validClick: [
          {
            label: 'Click hợp lệ',
            data: [141, 176, 40, 99, 114, 72, 70],
            fill: 'start'
          }
        ],
        invalidClick: [
          {
            label: 'Click không hợp lệ',
            data: [116, 85, 133, 12, 120, 10, 150],
            fill: 'start'
          }
        ],
      },
      labels: ['31/05', '01/06', '02/06', '03/06', '04/06', '05/06', '06/06'],
      colors: [
        {
          borderColor: '#f44336',
          backgroundColor: '#1e88e5',
          pointBackgroundColor: '#1e88e5',
          pointHoverBackgroundColor: '#1e88e5',
          pointBorderColor: '#ffffff',
          pointHoverBorderColor: '#ffffff'
        }
      ],
      options: {
        spanGaps: false,
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 32,
            left: 32,
            right: 32
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
                display: false,
                drawBorder: false,
                tickMarkLength: 18
              },
              ticks: {
                fontColor: '#ffffff'
              }
            }
          ],
          yAxes: [
            {
              display: false,
              ticks: {
                min: 0,
                max: 180,
                stepSize: 1
              }
            }
          ]
        },
        plugins: {
          filler: {
            propagate: false
          },
          xLabelsOnTop: {
            active: true
          }
        }
      }
    }

    this._registerCustomChartJSPlugin();
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
