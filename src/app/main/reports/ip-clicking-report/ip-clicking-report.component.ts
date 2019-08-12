import { Component, OnInit } from '@angular/core';
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { ReportService } from '../report.service';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from 'app/shared/services/dialog.service';

@Component({
  selector: 'app-ip-clicking-report',
  templateUrl: './ip-clicking-report.component.html',
  styleUrls: ['./ip-clicking-report.component.scss']
})
export class IpClickingReportComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['time', 'ip', 'clicks', 'location', 'os', 'browser', 'network', 'keyword'];

  dataSource = [];

  constructor(
    public _sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _reportService: ReportService,
    private _dialogService: DialogService
  ) {
    super();
  }

  isProcessing: boolean = false;
  total: number;
  currentPageNumber: number;

  ngOnInit() {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId)
          this.getDailyClickingReport(1);
      });
    this.subscriptions.push(sub);
  }

  getDailyClickingReport(page: number) {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._reportService.getDailyClickingReport({ page, limit: 10 })
      .subscribe(res => {
        this.dataSource = res.data.entries;
        this.total = res.data.totalItems;
        this._fuseProgressBarService.hide();
        this.isProcessing = false;
      },
        (error: HttpErrorResponse) => {
          this.dataSource = [];
          this._fuseProgressBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  changePage(event) {
    this.getDailyClickingReport(event);
  }

}