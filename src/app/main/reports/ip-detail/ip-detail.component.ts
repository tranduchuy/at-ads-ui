import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { SessionService } from 'app/shared/services/session.service';
import { ReportService } from '../report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { NestedTreeControl } from '@angular/cdk/tree';
import * as Url from 'url-parse';
import { FuseSplashScreenService } from '@fuse/services/splash-screen.service';

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
  pageLimit: number = 10;
  mainReportUrl: any;
  collapsedNodes: string[] = [];

  clicksDataSource = [];
  clicksDataSourceCols: string[] = ['type', 'createdAt', 'uuid', 'isPrivateBrowsing', 'href', 'os', 'browser', 'networkCompany', 'location', 'keyword', 'campaignType', 'matchType', 'page', 'position'];
  lastClickHistory: any;
  onLoadIpInfo: boolean = true;

  constructor(
    private _fuseProgressBarService: FuseProgressBarService,
    public sessionService: SessionService,
    private _reportService: ReportService,
    private _dialogService: DialogService,
    private _activatedRoute: ActivatedRoute,
    public router: Router,
    private _fuseSplashScreenService: FuseSplashScreenService
  ) {
    super();
  }

  ngOnInit() {
    this._fuseProgressBarService.show();
    const sub = this._activatedRoute.params
      .subscribe((params: any) => {
        if (params) {
          this.mainReportUrl = new Url(params.mainReportUrl);
          this.mainReportUrl.page = this.mainReportUrl.query.split('=')[1];
          this.ip = params.ip;
          this.getAccountId();
        }
      });
    this.subscriptions.push(sub);
  }

  backToMainReport() {
    this.router.navigate([this.mainReportUrl.pathname], {
      queryParams: {
        page: this.mainReportUrl.page,
      }
    });
  }

  getAccountId() {
    const getAccountIdSub = this.sessionService.getAccountId()
      .subscribe(
        (accoundId: string) => {
          if (accoundId) {
            this.checkAccountAcceptance();
          }
        }
      );
    this.subscriptions.push(getAccountIdSub);
  }

  getIPClicksList(page: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.getIPClicksList({ ip: this.ip, page, limit: this.pageLimit })
      .subscribe(
        res => {
          this.clicksDataSource = res.data.items;
          this.lastClickHistory = res.data.last;
          this.totalItems = res.data.meta.totalItems;
          this.pageTotal = Math.ceil(this.totalItems / this.pageLimit);

          

          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this.isProcessing = false;
          this.onLoadIpInfo = false;
        },
        (error: HttpErrorResponse) => {
          this.clicksDataSource = [];
          this.lastClickHistory = {};
          this.totalItems = 0;
          this.pageTotal = 0;
          this._fuseProgressBarService.hide();
          this._fuseSplashScreenService.hide();
          this.isProcessing = false;
          this.onLoadIpInfo = false;
          this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
  }

  checkAccountAcceptance() {
    const sub = this.sessionService.getAccountAcceptance()
      .subscribe((isAccepted: boolean) => {
        this.pageTotal = 0;

        if (isAccepted === true)
          this.pageLimit = 20;
        else this.pageLimit = 10;

        const selectedActiveAccount = this.sessionService.getValueOfSelectedActiveAccount();
        if (selectedActiveAccount) {
          this.currentPageNumber = 1;
        }
        else {
          const page = this._activatedRoute.snapshot.queryParamMap.get('page');

          if (page) {
            if (isNaN(Number(page))) {
              this.currentPageNumber = 1;
            }
            else {
              this.currentPageNumber = Number(page);
            }
          }
          else {
            this.currentPageNumber = 1;
          }
        }
        this.router.navigate([], {
          queryParams: {
            page: this.currentPageNumber,
          }
        });

        this.getIPClicksList(this.currentPageNumber);
      });
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.getIPClicksList(event);
    this.router.navigate([], {
      queryParams: {
        page: event,
      }
    });
  }

  numberWithSpaces(value: string, pattern: string) {
    let i = 0, phone = value.toString();
    return pattern.replace(/#/g, (_: any) => phone[i++]);
  }
}
