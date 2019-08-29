import { Component, OnInit } from '@angular/core';
import { FuseConfigService } from '@fuse/services/config.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FirebaseMessagingService } from 'app/shared/services/firebase-service/firebase-messaging.service';
import { MatTableDataSource } from '@angular/material';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HomepageService } from './homepage.service';

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
    private _firebaseMessagingService: FirebaseMessagingService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _homepageService: HomepageService
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
    this._firebaseMessagingService.getPermission();
    this.get30FirstIPLogs();
  }

  recieveMessage() {
    const sub = this._firebaseMessagingService.getMessage()
      .subscribe((payload: any) => {
        if (Object.keys(payload).length > 0) {

          let log = JSON.parse(payload.data.log);

          this.logs.unshift(log);

          if (this.logs.length > 30)
            this.logs.pop();

          this.dataSource = new MatTableDataSource<Element>(this.logs);
        }
      });
    this.subscriptions.push(sub);
  }

  get30FirstIPLogs() {
    this._fuseProgressBarService.show();
    const sub = this._homepageService.get30FirstIPLogs()
      .subscribe(res => {

        this.logs = (res.data.logs || [])
          .map(item => {
            return {
              createdAt: item.createdAt,
              ip: item.ip,
              device: {
                name: item.device !== undefined ? item.device.vendor : null
              },
              os: {
                name: item.os !== undefined ? item.os.name : null,
                version: item.os !== undefined ? item.os.version : null
              },
              browser: {
                name: item.browser !== undefined ? item.browser.name : null,
                version: item.browser !== undefined ? item.browser.version : null
              },
              network: {
                name: item.networkCompany !== undefined ? item.networkCompany.name : null
              },
              location: {
                city: item.location !== undefined ? item.location.city : null
              },
            }
          })

        this.dataSource = new MatTableDataSource<Element>(this.logs);

        this.recieveMessage();

        this._fuseProgressBarService.hide();
      });
    this.subscriptions.push(sub);
  }

}
