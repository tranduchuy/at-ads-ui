import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-history',
  templateUrl: './action-history.component.html',
  styleUrls: ['./action-history.component.scss']
})
export class ActionHistoryComponent implements OnInit {

  history = [];
  historyColumns = ['datetime', 'action'];
  currentPageNumber: number;
  pageTotal: number;
  totalItems: number;

  constructor() { }

  ngOnInit() {

    for(let i = 0; i < 45; i++)
      this.history.push({
        datetime: '11:45 23/08/2019',
        action: 'Thao tác ...'
      });

    this.totalItems = this.history.length;
    this.pageTotal = Math.ceil(this.totalItems / 20);

  }

  changePage(event) {

  }

}
