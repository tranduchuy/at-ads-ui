import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip-ranges-clicking-report',
  templateUrl: './ip-ranges-clicking-report.component.html',
  styleUrls: ['./ip-ranges-clicking-report.component.scss']
})
export class IpRangesClickingReportComponent implements OnInit {

  displayedColumns: string[] = ['time', 'ip', 'clicks', 'keyword', 'realPosition', 'clickPosition', 'network', 'device'];

  dataSource = [
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'FPT',
      device: 'Click bằng mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'VIETTEL',
      device: '80% mạng 3G - 20% mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'MOBIFONE',
      device: 'Click bằng mạng 3G'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'VINAPHONE',
      device: 'Click bằng mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'FPT',
      device: 'Click bằng mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'VIETTEL',
      device: '80% mạng 3G - 20% mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'MOBIFONE',
      device: 'Click bằng mạng 3G'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'VINAPHONE',
      device: 'Click bằng mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'FPT',
      device: 'Click bằng mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'VIETTEL',
      device: '80% mạng 3G - 20% mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'MOBIFONE',
      device: 'Click bằng mạng 3G'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'VINAPHONE',
      device: 'Click bằng mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'FPT',
      device: 'Click bằng mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'VIETTEL',
      device: '80% mạng 3G - 20% mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'MOBIFONE',
      device: 'Click bằng mạng 3G'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'VINAPHONE',
      device: 'Click bằng mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'FPT',
      device: 'Click bằng mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'VIETTEL',
      device: '80% mạng 3G - 20% mạng Wifi'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'MOBIFONE',
      device: 'Click bằng mạng 3G'
    },
    {
      time: '09:55 10/06/2019',
      ip: '116.100.*.*',
      clicks: 15,
      keyword: 'bảo hành tủ lạnh toshiba',
      realPosition: 'Ho Chi Minh City',
      clickPosition: 'Ho Chi Minh City',
      network: 'VINAPHONE',
      device: 'Click bằng mạng Wifi'
    },
  ];

  currentPageNumber: number;
  total: number;

  constructor() { }

  ngOnInit() {
  }

  changePage(event) {}

}
