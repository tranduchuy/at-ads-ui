import { Component, OnInit } from '@angular/core';
import { SessionService } from 'app/shared/services/session.service';

@Component({
  selector: 'app-ip-clicking-report',
  templateUrl: './ip-clicking-report.component.html',
  styleUrls: ['./ip-clicking-report.component.scss']
})
export class IpClickingReportComponent implements OnInit {

  displayedColumns: string[] = ['time', 'ip', 'clicks', 'status', 'location', 'os', 'browser', 'network', 'connection', 'keyword', 'matching', 'page', 'position'];

  pages = [];

  dataSource = [
    {
      time: '09:56 10/06/2019',
      ip: '192.168.1.1',
      clicks: 1,
      status: true,
      location: 'Ho Chi Minh City',
      os: 'Android 7.0 (Lolipop)',
      browser: 'Chrome 73.0.5663.90',
      network: 'VIETTEL',
      connection: '4G',
      keyword: 'sửa tủ lạnh',
      matching: 'Rộng',
      page: 1,
      position: 2
    },
    {
      time: '09:56 10/06/2019',
      ip: '192.168.1.1',
      clicks: 1,
      status: true,
      location: 'Ho Chi Minh City',
      os: 'Firefox 67.0',
      browser: 'Chrome 73.0.5663.90',
      network: 'VNPT',
      connection: '4G',
      keyword: 'sửa tủ lạnh',
      matching: 'Rộng',
      page: 1,
      position: 2
    },
    {
      time: '09:56 10/06/2019',
      ip: '192.168.1.1',
      clicks: 1,
      status: true,
      location: 'Ho Chi Minh City',
      os: 'Opera 12.1.1',
      browser: 'Chrome 73.0.5663.90',
      network: 'FPT',
      connection: '3G',
      keyword: '"bảo hành tủ lạnh Toshiba"',
      matching: 'Cụm từ',
      page: 1,
      position: 2
    },
    {
      time: '09:56 10/06/2019',
      ip: '192.168.1.1',
      clicks: 1,
      status: true,
      location: 'Ho Chi Minh City',
      os: 'Opera 12.1.1',
      browser: 'Chrome 73.0.5663.90',
      network: 'SCTV',
      connection: '3G',
      keyword: '"bảo hành tủ lạnh Toshiba"',
      matching: 'Cụm từ',
      page: 1,
      position: 2
    },
  ]

  constructor(
    public _sessionService: SessionService
  ) {
    this.pages = Array.from({ length: 5 }, (v, k) => k + 1);
  }

  ngOnInit() {
  }

}
