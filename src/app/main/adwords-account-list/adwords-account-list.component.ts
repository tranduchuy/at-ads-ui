import { Component, OnInit } from '@angular/core';

export interface AdwordsAccount {
  date: string;
  adwords: string;
  website: string;
  service: string;
  cost: string;
  display: string;
  click: string;
  spamClick: string;
  tracking: boolean;
}

const ELEMENT_DATA: AdwordsAccount[] = [
  {
    date: '17/05/2019',
    adwords: '322-238-9982',
    website: 'trungtamnguyenkim.com.vn',
    service: 'VIP (17/06/2019)',
    cost: '-',
    display: '-',
    click: '-',
    spamClick: '-',
    tracking: false,
  },
  {
    date: '17/05/2019',
    adwords: '322-238-9982',
    website: 'trungtamnguyenkim.com.vn',
    service: 'MIỄN PHÍ - NÂNG VIP',
    cost: '-',
    display: '-',
    click: '-',
    spamClick: '-',
    tracking: true,
  },
  {
    date: '17/05/2019',
    adwords: '322-238-9982',
    website: 'trungtamnguyenkim.com.vn',
    service: 'MIỄN PHÍ - NÂNG VIP',
    cost: '-',
    display: '-',
    click: '-',
    spamClick: '-',
    tracking: true,
  },
  {
    date: '17/05/2019',
    adwords: '322-238-9982',
    website: 'trungtamnguyenkim.com.vn',
    service: 'MIỄN PHÍ - NÂNG VIP',
    cost: '-',
    display: '-',
    click: '-',
    spamClick: '-',
    tracking: true,
  },
  {
    date: '17/05/2019',
    adwords: '322-238-9982',
    website: 'trungtamnguyenkim.com.vn',
    service: 'MIỄN PHÍ - NÂNG VIP',
    cost: '-',
    display: '-',
    click: '-',
    spamClick: '-',
    tracking: true,
  },
  {
    date: '17/05/2019',
    adwords: '322-238-9982',
    website: 'trungtamnguyenkim.com.vn',
    service: 'MIỄN PHÍ - NÂNG VIP',
    cost: '-',
    display: '-',
    click: '-',
    spamClick: '-',
    tracking: true,
  },
  {
    date: '17/05/2019',
    adwords: '322-238-9982',
    website: 'trungtamnguyenkim.com.vn',
    service: 'MIỄN PHÍ - NÂNG VIP',
    cost: '-',
    display: '-',
    click: '-',
    spamClick: '-',
    tracking: true,
  },
  {
    date: '17/05/2019',
    adwords: '322-238-9982',
    website: 'trungtamnguyenkim.com.vn',
    service: 'MIỄN PHÍ - NÂNG VIP',
    cost: '-',
    display: '-',
    click: '-',
    spamClick: '-',
    tracking: true,
  },
]

@Component({
  selector: 'app-adwords-account-list',
  templateUrl: './adwords-account-list.component.html',
  styleUrls: ['./adwords-account-list.component.scss']
})
export class AdwordsAccountListComponent implements OnInit {

  displayedColumns: string[] = ['task', 'date', 'adwords', 'website', 'service', 'cost', 'display', 'click', 'spamClick'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
