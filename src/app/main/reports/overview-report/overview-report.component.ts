import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { DialogService } from 'app/shared/services/dialog.service';

@Component({
  selector: 'app-overview-report',
  templateUrl: './overview-report.component.html',
  styleUrls: ['./overview-report.component.scss']
})
export class OverviewReportComponent implements OnInit {

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

  highlinePagesCols: string[] = ['order', 'activePage', 'userOnAction'];
  highlinePages = [
    {
      activePage: 'https://click.appnet.edu.vn',
      userOnAction: {
        number: 1,
        percentage: 14.29
      }
    }
  ];

  overviewTableCols: string[] = ['createdAt', 'ip', 'source', 'timeOnSite', 'isPrivateBrowsing', 'status', 'location', 'os', 'browser', 'networkCompany', 'connection', 'keyword'];
  overviewTable = [
    {
      createdAt: '16:17 09/05/2019',
      ip: '192.168.1.1',
      source: 'Google/cpc',
      timeOnSite: '00:00:14',
      isPrivateBrowsing: true,
      isSpam: true,
      location: {
        city: 'Ho Chi Minh City',
      },
      os: {
        name: 'Windows',
        version: '10'
      },
      browser: {
        name: 'Firefox',
        version: '68.80.80.0'
      },
      networkCompany: {
        name: 'VNPT'
      },
      connection: {
        name: '3G'
      },
      keyword: 'Bảo hành nguyễn kim'
    }
  ];

  // single = [
  //   {
  //     "name": "Thiết bị",
  //     "value": 100
  //   },
  // ]
  
  multi = [
    {
      "name": "Thiết bị",
      "series": [
        {
          "name": "Máy tính",
          "value": 57
        },
        {
          "name": "Di động",
          "value": 22
        },
        {
          "name": "Máy tính bảng",
          "value": 11
        }
      ]
    },
  ];

  view: any[] = [325, 50];

  // options
  showXAxis = false;
  showYAxis = false;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  colorScheme = {
    domain: ['#F44336', '#44b543', '#039be5']
  };

  pieChart = {
    legend: true,
    explodeSlices: false,
    labels: false,
    doughnut: false,
    gradient: false,
    scheme: {
      domain: ['#039be5', '#44b543', '#87CEEB', '#f44336', '#FFD700']
    },
    dataSource: [
      {
        name: 'google/cpc',
        value: 82,
        data: 6543
      },
      {
        name: 'google/organic',
        value: 12
      },
      {
        name: 'facebook.com',
        value: 2
      },
      {
        name: '[direct]/[none]',
        value: 2
      },
      {
        name: 'coccoc.com',
        value: 1
      }
    ],
  };

  constructor(
    private _dialogService: DialogService

  ) {
    for (let i = 0; i < 5; i++)
      this.highlinePages.push(this.highlinePages[0]);

    for (let i = 0; i < 5; i++)
      this.overviewTable.push(this.overviewTable[0]);
  }

  ngOnInit() {
  }

  onApplyDateRange(event) {
    if (moment(event.endDate).diff(moment(event.startDate), 'days') + 1 > 60) {
      this._dialogService._openInfoDialog('Vui lòng chọn khoảng thời gian thống kê trong vòng 60 ngày trở lại');
      return false;
    }
    return true;
  }
}
