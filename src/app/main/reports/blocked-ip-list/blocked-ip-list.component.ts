import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface blockedIP {
  ip: string;
  network: string;
  blockingOver: number;
  campaign: string;
}

const ELEMENT_DATA: blockedIP[] = [
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

@Component({
  selector: 'app-blocked-ip-list',
  templateUrl: './blocked-ip-list.component.html',
  styleUrls: ['./blocked-ip-list.component.scss']
})
export class BlockedIpListComponent implements OnInit {

  displayedColumns: string[] = ['order', 'task', 'ip', 'network', 'blockingOver', 'campaign'];

  dataSource = new MatTableDataSource<blockedIP>(ELEMENT_DATA);

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor() { }

}
