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
import { BehaviorSubject } from 'rxjs';
import * as moment from 'moment';

@Component({
  selector: 'app-adwords-account-list',
  templateUrl: './adwords-account-list.component.html',
  styleUrls: ['./adwords-account-list.component.scss']
})
export class AdwordsAccountListComponent extends PageBaseComponent implements OnInit {

  // displayedColumns: string[] = ['task', 'date', 'adwords', 'website', 'service', 'cost', 'display', 'click', 'spamClick'];
  displayedColumns: string[] = ['task', 'date', 'adwords', 'accepted', 'website'];
  accounts = [];
  getAccountsDone$ = new BehaviorSubject(false);
  isProcessing: boolean = false;
  adsAccountIdPipe = new AdsAccountIdPipe();

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
    this.getAccounts();

    const sub = this._sessionService.getAcceptedAdsId()
      .subscribe((adsId: string) => {
        if (adsId)
          this.checkAccountAcceptance(adsId);
      });
    this.subscriptions.push(sub);
  }

  openRemoveAccountConfirmDialog(accountId: string) {
    const openConfirmDialogSub = this._dialogService._openConfirmDialog('Ngắt kết nối tài khoản Google Ads này?')
      .subscribe((isAccepted: boolean) => {

        if (isAccepted) {
          this.isProcessing = true;
          this._fuseProgressiveBarService.show();

          const removeAccountSub = this._adwordsAccountListService.removeAccount(accountId)
            .subscribe(
              (res: ILoginSuccess) => {

                this.getAccounts();

                const getAccountDoneSub = this.getAccountsDone$
                  .subscribe(
                    isDone => {
                      if (this.accounts.length > 0) {

                        if (accountId === this._sessionService.activeAccountId) {
                          this._sessionService.setActiveAccountId(this.accounts[0].id);
                          this._sessionService.setActiveAdsAccountId(this.adsAccountIdPipe.transform(this.accounts[0].adsId));
                          this._sessionService.setAccountId(this.accounts[0].id);
                          this._sessionService.setAdwordId(this.accounts[0].adsId);
                        }

                      }
                      else {
                        this._sessionService.setActiveAccountId('');
                        this._sessionService.setActiveAdsAccountId('');
                        this._sessionService.setAccountId('');
                        this._sessionService.setAdwordId('');
                      }

                      this._fuseNavigationService.reloadNavigation();
                    }
                  );
                this.subscriptions.push(getAccountDoneSub);

                setTimeout(() => {
                  this._fuseNavigationService.reloadNavigation();
                  this._fuseProgressiveBarService.hide();
                  this._dialogService._openSuccessDialog({ messages: ['Ngắt kết nối tài khoản Google Ads thành công'] });
                  this.isProcessing = false;
                }, 0);

              },
              (error: HttpErrorResponse) => {
                this._fuseProgressiveBarService.hide();
                this._dialogService._openErrorDialog(error.error);
                this.isProcessing = false;
              });
          this.subscriptions.push(removeAccountSub);
        }

      });
    this.subscriptions.push(openConfirmDialogSub);
  }

  openRemoveWebsiteConfirmDialog(websiteId: string) {
    const confirmDialogSub = this._dialogService._openConfirmDialog('Xóa website này khỏi tài khoản Google Ads?')
      .subscribe(
        (isAccepted) => {
          if (isAccepted) {
            this._fuseProgressiveBarService.show();
            const sub = this._adwordsAccountListService.removeWebsite(websiteId)
              .subscribe(
                (res: ILoginSuccess) => {

                  this.getAccounts();

                  setTimeout(() => {
                    this._fuseProgressiveBarService.hide();
                    this._dialogService._openSuccessDialog(res);
                  }, 0);
                },
                (error: HttpErrorResponse) => {
                  if (error.error.messages) {
                    this._dialogService._openErrorDialog(error.error);
                  }
                  this._fuseProgressiveBarService.hide();
                });
            this.subscriptions.push(sub);
          }
        });
    this.subscriptions.push(confirmDialogSub);
  }

  getAccounts() {
    this._fuseProgressiveBarService.show();
    const sub = this._adwordsAccountListService.getAccounts()
      .subscribe(
        (res) => {
          this._fuseProgressiveBarService.hide();
          this.accounts = res.data.accounts;

          this.getAccountsDone$.next(true);
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this.accounts = [];
          this.getAccountsDone$.next(true);
        });
    this.subscriptions.push(sub);
  }

  navigateToSpamClickReport(accountId: string, adsId: string) {
    this._sessionService.setActiveGoogleAdsAccount(accountId, this.adsAccountIdPipe.transform(adsId));
    this._fuseNavigationService.reloadNavigation();
    this._router.navigateByUrl('/bao-cao/click-ao');
  }

  navigateToWebsiteManagement(accountId: string, campaignNumber: number) {
    // if (campaignNumber > 0)
    //   this._router.navigateByUrl(`/quan-ly-website/${accountId}`);
    // else this._dialogService._openErrorDialog({ messages: ['Tài khoản hiện chưa được thêm chiến dịch.'] });
    this._router.navigateByUrl(`/quan-ly-website/${accountId}`);
  }

  checkAccountAcceptance(adsId: string, isConnected?: boolean) {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._adwordsAccountListService.checkAccountAcceptance({ adWordId: adsId })
      .subscribe(res => {

        this.getAccounts();

        if (this.adsAccountIdPipe.transform(adsId) === this._sessionService.activeAdsAccountId)
          this._sessionService.setAccountAcceptance(res.data.isConnected);

        setTimeout(() => {
          this._fuseProgressiveBarService.hide();
          this._fuseNavigationService.reloadNavigation();
          //this._dialogService._openSuccessDialog({ messages: ['Cập nhật tài khoản Google Ads thành công'] });
          this.isProcessing = false;
        }, 0);
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

}
