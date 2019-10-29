import { Component, OnInit } from '@angular/core';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { ILoginSuccess } from '../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from '../../shared/services/dialog.service';
import { SessionService } from 'app/shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { AdwordsAccountListService } from './adwords-account-list.service';
import { Router } from '@angular/router';
import { FuseNavigationService } from '@fuse/components/navigation/navigation.service';
import { AdsAccountIdPipe } from 'app/shared/pipes/ads-account-id/ads-account-id.pipe';
import * as _ from 'lodash';
import { MatTableDataSource, MatTab } from '@angular/material';

@Component({
  selector: 'app-adwords-account-list',
  templateUrl: './adwords-account-list.component.html',
  styleUrls: ['./adwords-account-list.component.scss']
})
export class AdwordsAccountListComponent extends PageBaseComponent implements OnInit {

  displayedColumns: string[] = ['task', 'date', 'adwords', 'accepted', 'website'];
  accounts = [];
  dataSource = new MatTableDataSource();
  accountConnectTypes = [];
  isProcessing: boolean = false;
  adsAccountIdPipe = new AdsAccountIdPipe();
  user: any;
  isTitle1Displayed: boolean = false;
  isTitle2Displayed: boolean = false;
  userHasAccount: boolean = false;

  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _adwordsAccountListService: AdwordsAccountListService,
    private _router: Router,
    private _sessionService: SessionService,
    private _fuseNavigationService: FuseNavigationService,
  ) {
    super();
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.accounts);
    this.user = JSON.parse(this._sessionService.user);
    this.getAccounts();
  }

  setTitleDisplaying() {
    const userLicenceType = this.user.licence.type;
    const sub = this._sessionService.checkIfUserHasAccount()
      .subscribe((userHasAccount: boolean) => {
        if (userHasAccount) {
          if (userLicenceType !== 'CUSTOM') {
            this.isTitle1Displayed = false;
            this.isTitle2Displayed = true;
          }
          else {
            this.isTitle1Displayed = true;
            this.isTitle2Displayed = false;
          }
        }
        else {
          this.isTitle1Displayed = true;
          this.isTitle2Displayed = false;
        }
      })
    this.subscriptions.push(sub);
  }

  openRemoveAccountConfirmDialog(accountId: string) {
    const openConfirmDialogSub = this._dialogService._openConfirmDialog('Ngắt kết nối tài khoản Google Ads này?')
      .subscribe((isAccepted: boolean) => {
        if (isAccepted) {
          this.removeAccount(accountId);
        }
      });
    this.subscriptions.push(openConfirmDialogSub);
  }

  removeAccount(accountId: string) {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const removeAccountSub = this._adwordsAccountListService.removeAccount(accountId)
      .subscribe(
        (res: ILoginSuccess) => {
          this._sessionService.notifyListAccountsChanged({
            name: 'remove',
            message: 'Ngắt kết nối tài khoản Google Ads thành công'
          });
          // this._sessionService.notifyListAccountsChanged('remove');
          // _.remove(this.accounts, account => account.accountId === accountId);
          // this._sessionService.completeRemovingAccount(accountId);
          // this.dataSource = new MatTableDataSource(this.accounts);
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        });
    this.subscriptions.push(removeAccountSub);
  }

  openRemoveWebsiteConfirmDialog(websiteId: string) {
    const confirmDialogSub = this._dialogService._openConfirmDialog('Xóa website này khỏi tài khoản Google Ads?')
      .subscribe(
        (isAccepted) => {
          if (isAccepted) {
            this.removeWebiste(websiteId);
          }
        });
    this.subscriptions.push(confirmDialogSub);
  }

  removeWebiste(websiteId: string) {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();
    const sub = this._adwordsAccountListService.removeWebsite(websiteId)
      .subscribe(
        (res: ILoginSuccess) => {
          this._sessionService.notifyListAccountsChanged({
            name: 'remove',
            message: res.messages[0]
          });
          this.isProcessing = false;
        },
        (error: HttpErrorResponse) => {
          if (error.error.messages) {
            this._dialogService._openErrorDialog(error.error);
          }
          this._fuseProgressiveBarService.hide();
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  getAccounts() {
    this._fuseProgressiveBarService.show();
    const sub = this._sessionService.getListAccounts()
      .subscribe((listAccounts: any) => {
        if (listAccounts) {
          this._fuseProgressiveBarService.hide();
          this.accounts = listAccounts;
          this.dataSource = new MatTableDataSource(this.accounts);
          this.setTitleDisplaying();
        }
      });
    this.subscriptions.push(sub);
  }

  navigateToSpamClickReport(accountId: string, adsId: string) {
    this._sessionService.setActiveGoogleAdsAccount(accountId, this.adsAccountIdPipe.transform(adsId));
    this._fuseNavigationService.reloadNavigation();
    this._router.navigateByUrl('/bao-cao/click-ao');
  }

  navigateToWebsiteManagement(accountId: string, campaignNumber: number) {
    this._router.navigateByUrl(`/quan-ly-website/${accountId}`);
  }

  checkAccountAcceptance(adsId: string, isConnected?: boolean, connectType?: string) {
    if (connectType === 'GOOGLE_ADS_ID') {
      this.isProcessing = true;
      this._fuseProgressiveBarService.show();

      const sub = this._adwordsAccountListService.checkAccountAcceptance({ adWordId: adsId })
        .subscribe(res => {
          if (this.adsAccountIdPipe.transform(adsId) === this._sessionService.activeAdsAccountId)
            this._sessionService.setAccountAcceptance(res.data.isConnected);

          this._sessionService.notifyListAccountsChanged();
          this._fuseProgressiveBarService.hide();
          this.isProcessing = false;
        },
          (error: HttpErrorResponse) => {
            this._fuseProgressiveBarService.hide();
            this._dialogService._openErrorDialog(error.error);
            this.isProcessing = false;
          });
      this.subscriptions.push(sub);
    }
    else {
      this._fuseProgressiveBarService.show();
      setTimeout(() => {
        this._fuseProgressiveBarService.hide();
      }, 1000);
    }
  }
}
