import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FirebaseMessagingService } from 'app/shared/services/firebase-service/firebase-messaging.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent extends PageBaseComponent implements OnInit {

  logColumns = ['datetime', 'ip', 'device', 'os', 'browser', 'network', 'location'];

  logs = [];

  dataSource = new MatTableDataSource<Element>(this.logs);

  constructor(
    private _fuseConfigService: FuseConfigService,
    private _firebaseMessagingService: FirebaseMessagingService
  ) {

    super();

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

    // for (let i = 0; i < 29; i++)
    //   this.logs.push({
    //     createdAt: '09:19 20/08/2019',
    //     ip: '192.168.1.1',
    //     device: {
    //       name: 'iPhone'
    //     },
    //     os: {
    //       name: 'Windows',
    //       version: '10'
    //     },
    //     browser: {
    //       name: 'Firefox',
    //       version: '68.70.10.1'
    //     },
    //     network: {
    //       name: 'VIETTEL'
    //     },
    //     location: {
    //       city: 'Ho Chi Minh City'
    //     },
    //   });
  }

  ngOnInit() {

    this.logs = [];

    this._firebaseMessagingService.getPermission();

    const sub = this._firebaseMessagingService.getMessage()
      .subscribe((payload: any) => {
        if (Object.keys(payload).length > 0) {

          const log = JSON.parse(payload.data.log);
          this.logs.unshift(log);

          if (this.logs.length > 30)
            this.logs.pop();

          this.dataSource = new MatTableDataSource<Element>(this.logs);
        }
      });
    this.subscriptions.push(sub);
  }

}
