import { Component, OnInit } from '@angular/core';
import { SessionService } from 'app/shared/services/session.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { ReportService } from '../report.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ILoginSuccess } from 'app/authentication/login/models/i-login-success';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blocked-ip-list',
  templateUrl: './blocked-ip-list.component.html',
  styleUrls: ['./blocked-ip-list.component.scss']
})
export class BlockedIpListComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['order', 'task', 'ip', 'isPrivateBrowsing', 'network', 'blockingOver', 'campaign', 'keyword', 'keywordMatchType'];

  dataSource = [];

  currentPageNumber: number;
  pageTotal: number;
  isProcessing: boolean = false;
  totalItems: number;
  pageLimit: number = 10;

  constructor(
    public _sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _dialogService: DialogService,
    private _reportService: ReportService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router
  ) {
    super();
  }

  ngOnInit() {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId) {
          this.pageTotal = 0;

          const page = this._activatedRoute.snapshot.queryParamMap.get('page');

          if (page) {
            if (isNaN(Number(page)))
              return;
            this.currentPageNumber = Number(page);
          }
          else {
            this.currentPageNumber = 1;
            this._router.navigate([], {
              queryParams: {
                page: this.currentPageNumber,
              }
            });
          }

          this.getBlockedIPsListReport(this.currentPageNumber);
        }
      });
    this.subscriptions.push(sub);
  }

  getBlockedIPsListReport(page: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.getBlockedIPsListReport({ page, limit: this.pageLimit })
      .subscribe(res => {

        this.dataSource = res.data.ips;

        this.totalItems = res.data.totalItems;
        this.pageTotal = Math.ceil(this.totalItems / this.pageLimit) || 0;

        setTimeout(() => {
          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        }, 500);
      },
        (error: HttpErrorResponse) => {
          this.dataSource = [];
          this.pageTotal = 0;
          this.totalItems = 0;
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  openRemoveAutoBlockedIPConfirmDialog(ip: string) {
    const openConfirmDialogSub = this._dialogService._openConfirmDialog('Mở chặn IP này?')
      .subscribe(
        (isAccepted: boolean) => {
          if (isAccepted)
            this.removeAutoBlockedIP(ip);
        });
    this.subscriptions.push(openConfirmDialogSub);
  }

  removeAutoBlockedIP(ip: string) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.removeAutoBlockedIP({ ips: [ip] })
      .subscribe(
        (res: ILoginSuccess) => {

          this.getBlockedIPsListReport(this.currentPageNumber);

          setTimeout(() => {
            this._fuseProgressBarService.hide();
            this._dialogService._openSuccessDialog(res);
            this.isProcessing = false;
          }, 0);
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();

          if (error.status === 404) {
            this._dialogService._openErrorDialog({
              messages: [`${error.error.data.ips[0]} không nằm trong blacklist.`]
            });
          }
          else this._dialogService._openErrorDialog(error.error);

          this.isProcessing = false;
        }
      );
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.getBlockedIPsListReport(event);
    this._router.navigate([], {
      queryParams: {
        page: event,
      }
    });
  }

}
