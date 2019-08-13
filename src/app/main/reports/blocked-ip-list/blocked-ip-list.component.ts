import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blocked-ip-list',
  templateUrl: './blocked-ip-list.component.html',
  styleUrls: ['./blocked-ip-list.component.scss']
})
export class BlockedIpListComponent implements OnInit {

  displayedColumns: string[] = ['order', 'task', 'ip', 'network', 'blockingOver', 'campaign'];

  dataSource = [
    {
      ip: '192.168.1.1',
      network: 'MOBIFONE',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'VNPT',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'VIETTEL',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'SCTV',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'FPT',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'MOBIFONE',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'VNPT',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'MOBIFONE',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'VNPT',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'MOBIFONE',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'VNPT',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'MOBIFONE',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'VNPT',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'MOBIFONE',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'VNPT',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'MOBIFONE',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
    {
      ip: '192.168.1.1',
      network: 'VNPT',
      blockingOver: 20,
      campaign: '1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,1.Bảo hành tivi, 1. Tivi - chung - không xác định,'
    },
  ];
  
  currentPageNumber: number = 1;
  pageTotal: number = Math.ceil(this.dataSource.length/10);

  ngOnInit() {

  }

  constructor() { }

  changePage(event) {

  }

}
