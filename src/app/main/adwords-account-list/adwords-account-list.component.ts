import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../shared/components/base/editable-form-base.component';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { ILoginSuccess } from '../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from '../../shared/services/dialog.service';
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { AdwordsAccountListService } from './adwords-account-list.service';

export interface Website {
  domain: string;
  code: string;
  expiredAt: Date | null;
  status: number;
}

export interface Account {
  id: string;
  adsId: string;
  createdAt: Date;
  numberOfWebsites: number;
  websites: Website[];
}

@Component({
  selector: 'app-adwords-account-list',
  templateUrl: './adwords-account-list.component.html',
  styleUrls: ['./adwords-account-list.component.scss']
})
export class AdwordsAccountListComponent extends PageBaseComponent implements OnInit {

  // displayedColumns: string[] = ['task', 'date', 'adwords', 'website', 'service', 'cost', 'display', 'click', 'spamClick'];
  displayedColumns: string[] = ['task', 'date', 'adwords', 'website'];
  accounts: Account[];

  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _sessionService: SessionService,
    private _adwordsAccountListService: AdwordsAccountListService
  ) {
    super();
  }

  ngOnInit() {
    this.getAccounts();
  }

  openRemoveWebsiteDialog(websiteId: string) {
    if (window.confirm('Ngắt kết nối Adwords cho website này?')) {
      this._fuseProgressiveBarService.show();
      const sub = this._adwordsAccountListService.removeWebsite(websiteId).subscribe((res: ILoginSuccess) => {
        this._fuseProgressiveBarService.hide();
        this._dialogService._openSuccessDialog(res);
        this.getAccounts();
      },
        (error: HttpErrorResponse) => {
          if (error.error.messages) {
            this._dialogService._openErrorDialog(error.error);
          }
          this._fuseProgressiveBarService.hide();
        });
      this.subscriptions.push(sub);
    }
  }

  getAccounts() {
    this.accounts = [];
    this._fuseProgressiveBarService.show();
    const sub = this._adwordsAccountListService.getAccounts().subscribe(res => {
      this.accounts = res.data.accounts;

      if (this.accounts.length > 0) {
        for (const item of this.accounts) {
          item.websites = [];
          const getWebsiteSub = this._adwordsAccountListService.getWebsites(item.id).subscribe(res => {
            this._fuseProgressiveBarService.hide();
            item.websites = res.data.website;
          });
          this.subscriptions.push(getWebsiteSub);
        }
      }
    },
      (error: HttpErrorResponse) => {
        if (error.error.messages) {
          this._dialogService._openErrorDialog(error.error);
        }
        this._fuseProgressiveBarService.hide();
      });
    this.subscriptions.push(sub);
  }
}
