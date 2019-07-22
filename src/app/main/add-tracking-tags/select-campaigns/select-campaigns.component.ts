import { Component, OnInit } from '@angular/core';

export interface Campaign {
  order: number;
  campaign: string;
  status: string;
  tracking: boolean;
}

const ELEMENT_DATA:Campaign[] = [
  {
    order: 1,
    campaign: '1. Tivi - loại',
    status: 'Hoạt động',
    tracking: false,
  },
  {
    order: 2,
    campaign: '1. Tivi - thương hiệu',
    status: 'Hoạt động',
    tracking: false,
  },
  {
    order: 3,
    campaign: '1. Tivi - chung',
    status: 'Hoạt động',
    tracking: false,
  },
  {
    order: 23,
    campaign: '8. Máy lạnh - Chung - không xác định',
    status: 'Đang dừng',
    tracking: false,
  },
  {
    order: 23,
    campaign: '8. Máy lạnh - Chung - không xác định',
    status: 'Đang dừng',
    tracking: false,
  },
  {
    order: 23,
    campaign: '8. Máy lạnh - Chung - không xác định',
    status: 'Đang dừng',
    tracking: false,
  },
  {
    order: 23,
    campaign: '8. Máy lạnh - Chung - không xác định',
    status: 'Đang dừng',
    tracking: false,
  },
  {
    order: 23,
    campaign: '8. Máy lạnh - Chung - không xác định',
    status: 'Đang dừng',
    tracking: false,
  },
  {
    order: 23,
    campaign: '8. Máy lạnh - Chung - không xác định',
    status: 'Đang dừng',
    tracking: false,
  },
  {
    order: 23,
    campaign: '8. Máy lạnh - Chung - không xác định',
    status: 'Đang dừng',
    tracking: false,
  },
  {
    order: 23,
    campaign: '8. Máy lạnh - Chung - không xác định',
    status: 'Đang dừng',
    tracking: false,
  },
  {
    order: 23,
    campaign: '8. Máy lạnh - Chung - không xác định',
    status: 'Đang dừng',
    tracking: false,
  },
  {
    order: 23,
    campaign: '8. Máy lạnh - Chung - không xác định',
    status: 'Đang dừng',
    tracking: false,
  },
]

@Component({
  selector: 'app-select-campaigns',
  templateUrl: './select-campaigns.component.html',
  styleUrls: ['./select-campaigns.component.scss']
})
export class SelectCampaignsComponent implements OnInit {

  displayedColumns: string[] = ['order', 'campaign', 'status', 'tracking'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
