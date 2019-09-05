import { Component, OnInit } from '@angular/core';
import { SessionService } from 'app/shared/services/session.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { ReportService } from '../report.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { HttpErrorResponse } from '@angular/common/http';
import { ILoginSuccess } from 'app/authentication/login/models/i-login-success';

export interface BlockedIP {
  _id: string;
  campaignIds: string[];
  numberOfCampaigns: number;
  network: string;
}

@Component({
  selector: 'app-blocked-ip-list',
  templateUrl: './blocked-ip-list.component.html',
  styleUrls: ['./blocked-ip-list.component.scss']
})
export class BlockedIpListComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['order', 'task', 'ip', 'isPrivateBrowsing','network', 'blockingOver', 'campaign'];

  dataSource: BlockedIP[] = [];

  currentPageNumber: number;
  pageTotal: number;
  isProcessing: boolean = false;
  totalItems: number;

  constructor(
    public _sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _dialogService: DialogService,
    private _reportService: ReportService
  ) {
    super();
  }

  ngOnInit() {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId)
          this.getBlockedIPsListReport();
      });
    this.subscriptions.push(sub);
  }

  getBlockedIPsListReport() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.getBlockedIPsListReport()
      .subscribe(res => {

        this.dataSource = res.data.ips;

        // if (this.dataSource.length > 0)
        //   this.pageTotal = Math.ceil(this.dataSource.length / 10);
        // else this.pageTotal = 0;

        // this.totalItems = this.dataSource.length

        setTimeout(() => {
          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        }, 0);
      },
        (error: HttpErrorResponse) => {
          this.dataSource = [];
          // this.pageTotal = 0;
          // this.totalItems = 0;
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

          this.getBlockedIPsListReport();

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

  }

}
