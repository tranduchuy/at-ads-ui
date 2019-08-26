import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  tableColumns = ['datetime', 'ip', 'status', 'location', 'click', 'device', 'browser', 'network', 'connection', 'campaign', 'keyword', 'matching', 'page', 'position'];

  dataSource = [
    {
      datetime: '9:19 20/08/2019',
      ip: '192.168.1.1',
      status: 'Hợp lệ',
      location: 'Vietnam',
      click: 1,
      device: 'iPhone',
      browser: 'Safari',
      network: 'VIETTEL',
      connection: '4G',
      campaign: 'Google Search',
      keyword: '[học tiếng anh]',
      matching: 'Chính xác',
      page: 1,
      position: 2
    }
  ];

  constructor(
    private _fuseConfigService: FuseConfigService,
  ) {
    this._fuseConfigService.config = {
      layout: {
        navbar: {
          hidden: true
        },
        toolbar: {
          hidden: true
        },
        footer: {
          hidden: true
        },
        sidepanel: {
          hidden: true
        }
      }
    };

    for (let i = 0; i < 15; i++)
      this.dataSource.push({
        datetime: '9:19 20/08/2019',
        ip: '192.168.1.1',
        status: 'Hợp lệ',
        location: 'Vietnam',
        click: 1,
        device: 'iPhone',
        browser: 'Safari',
        network: 'VIETTEL',
        connection: '4G',
        campaign: 'Google Search',
        keyword: '[học tiếng anh]',
        matching: 'Chính xác',
        page: 1,
        position: 2
      });
  }

  ngOnInit() {
  }

}
