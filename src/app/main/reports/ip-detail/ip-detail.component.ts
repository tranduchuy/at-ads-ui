import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';

@Component({
  selector: 'app-ip-detail',
  templateUrl: './ip-detail.component.html',
  styleUrls: ['./ip-detail.component.scss']
})
export class IpDetailComponent extends PageBaseComponent implements OnInit {

  ip: string;
  rightTableColumns: string[] = ['adwords', 'accessTime', 'control', 'keyword', 'website'];

  rightTable: any = [
    {
      accessTime: '2019-06-06 20:25:41',
      device: 'phone',
      website: 'www.google.com'
    },
    {
      accessTime: '2019-06-06 20:25:41',
      device: 'pc',
      website: 'www.google.com'
    },
    {
      accessTime: '2019-06-06 20:25:41',
      device: 'tablet',
      website: 'www.google.com'
    },
    {
      accessTime: '2019-06-06 20:25:41',
      device: 'phone',
      website: 'www.google.com'
    },
    {
      accessTime: '2019-06-06 20:25:41',
      device: 'pc',
      website: 'www.google.com'
    },
    {
      accessTime: '2019-06-06 20:25:41',
      device: 'tablet',
      website: 'www.google.com'
    },
    {
      accessTime: '2019-06-06 20:25:41',
      device: 'phone',
      website: 'www.google.com'
    },
    {
      accessTime: '2019-06-06 20:25:41',
      device: 'pc',
      website: 'www.google.com'
    },
    {
      accessTime: '2019-06-06 20:25:41',
      device: 'tablet',
      website: 'www.google.com'
    },
  ]

  constructor(
    private _activatedRoute: ActivatedRoute,
  ) {
    super();
  }

  ngOnInit() {

    const sub = this._activatedRoute.params
      .subscribe((params: any) => {
        this.ip = params.ip;
      });
    this.subscriptions.push(sub);

  }

}
