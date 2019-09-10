import { Component, OnInit, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { SessionService } from 'app/shared/services/session.service';
import { ReportService } from '../report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import { MatTreeFlattener, MatTreeFlatDataSource, MatTreeNestedDataSource } from '@angular/material/tree';
import { FlatTreeControl, NestedTreeControl } from '@angular/cdk/tree';
import * as moment from 'moment'
import { FuseThemeOptionsModule } from '@fuse/components';
import { BehaviorSubject, Observable, merge, observable } from 'rxjs';
import { CollectionViewer, SelectionChange } from '@angular/cdk/collections';
import { map } from 'rxjs/operators';

interface Node {
  name: string[];
  id: string;
  index: number;
  children?: Node[];
  logs?: any[];
}

@Component({
  selector: 'app-ip-detail',
  templateUrl: './ip-detail.component.html',
  styleUrls: ['./ip-detail.component.scss'],
})
export class IpDetailComponent extends PageBaseComponent implements OnInit {

  ip: string;
  historyColumns: string[] = ['adwords', 'accessTime', 'device', 'os', 'browser', 'isPrivateBrowsing', 'keyword', 'website', 'location'];
  history = [];
  lastHistory = [];
  isProcessing: boolean = false;
  currentPageNumber: number;
  totalItems: number;
  pageTotal: number;
  pageLimit: number;
  collapsedNodes: string[] = [];

  treeControl = new NestedTreeControl<Node>(node => node.children);
  dataSource = new MatTreeNestedDataSource<Node>();
  hasChild = (_: number, node: Node) => !!node.children && node.children.length > 0;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _fuseProgressBarService: FuseProgressBarService,
    public _sessionService: SessionService,
    private _reportService: ReportService,
    private _dialogService: DialogService,
  ) {
    super();
  }

  ngOnInit() {
    const sub = this._activatedRoute.params
      .subscribe((params: any) => {

        if (params.ip) {
          this.ip = params.ip;
          const getAccountIdSub = this._sessionService.getAccountId()
            .subscribe(
              (accoundId: string) => {
                if (accoundId)
                  this.checkAccountConnection(accoundId);
              }
            );
          this.subscriptions.push(getAccountIdSub);
        }

      });
    this.subscriptions.push(sub);
  }

  showUUIDs(node: Node) {
    const endId = node.id;
    const index = node.index;

    if (this.dataSource.data[index].children[0].name[0] === '') {
      if (this.collapsedNodes.includes(endId))
        this.collapsedNodes = this.collapsedNodes.filter(item => item !== endId);
      else {
        this.collapsedNodes.push(endId);
        let startId: string;

        if (this.dataSource.data[index + 1] !== undefined)
          startId = this.dataSource.data[index + 1].id;
        else startId = null;

        this.getIPClickDetails(startId, endId, index);
      }
    }
  }

  getIPClicksList() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.getIPClicksList({ ip: this.ip })
      .subscribe(
        res => {
          this.dataSource.data = (res.data || []).map((item, index) => {
            return {
              name: [moment(item.timestamp).format('HH:mm DD/MM/YYYY')],
              index,
              id: item._id,
              children: [
                {
                  name: [''],
                  index,
                  id: item._id
                }
              ],
              logs: {
                device: item.device,
                location: item.location
              }
            }
          });

          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this.isProcessing = false;
          this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
  }

  getIPClickDetails(startId: string, endId: string, index: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.getIPClickDetails({ ip: this.ip, startId, endId })
      .subscribe(
        res => {

          let resData = JSON.parse(JSON.stringify(res.data));

          if (resData.length > 0) {
            this.dataSource.data[index].children = (resData)
              .map((child, childIndex) => {
                return {
                  name: [child._id ? child._id : 'Unknown'],
                  id: '',
                  index: childIndex,
                  logs: child.logs
                }
              });


            resData = this.dataSource.data;
            this.dataSource.data = null;
            this.dataSource.data = resData;
          }

          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this.isProcessing = false;
          this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
  }

  checkAccountConnection(accountId: string) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.getAdwordsAccountDetail(accountId)
      .subscribe(
        res => {
          if (res.data.adsAccount.isConnected)
            this.pageLimit = 20;
          else this.pageLimit = 10;

          //this.getIPHistory(this.ip, 1, this.pageLimit);
          this.getIPClicksList();

          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  getIPHistory(ip: string, page: number, limit: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.getIPHistory({ ip, page, limit })
      .subscribe(
        res => {

          this.history = res.data.history;

          this.totalItems = res.data.totalItems;
          this.pageTotal = Math.ceil(this.totalItems / this.pageLimit);

          this.lastHistory = res.data.last;

          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this.history = [];
          this.lastHistory = [];
          this.pageTotal = 0;
          this.totalItems = 0;

          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.getIPHistory(this.ip, event, this.pageLimit);
  }

}
