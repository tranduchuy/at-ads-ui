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

@Component({
  selector: 'app-adwords-account-list',
  templateUrl: './adwords-account-list.component.html',
  styleUrls: ['./adwords-account-list.component.scss']
})
export class AdwordsAccountListComponent extends PageBaseComponent implements OnInit {

  // displayedColumns: string[] = ['task', 'date', 'adwords', 'website', 'service', 'cost', 'display', 'click', 'spamClick'];
  displayedColumns: string[] = ['task', 'date', 'adwords', 'accepted', 'website'];
  accounts = [];
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
  }

  openRemoveAccountConfirmDialog(accountId: string) {
    const openConfirmDialogSub = this._dialogService._openConfirmDialog('Ngắt kết nối tài khoản Adwords này?')
      .subscribe((isAccepted: boolean) => {

        if (isAccepted) {
          this.isProcessing = true;
          this._fuseProgressiveBarService.show();

          const removeAccountSub = this._adwordsAccountListService.removeAccount(accountId)
            .subscribe(
              (res: ILoginSuccess) => {

                this.getAccounts();

                setTimeout(() => {
                  this._fuseProgressiveBarService.hide();
                  this._dialogService._openSuccessDialog({ messages: ['Ngắt kết nối tài khoản AdWords thành công'] });
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
    const confirmDialogSub = this._dialogService._openConfirmDialog('Xóa website này khỏi tài khoản AdWords?')
      .subscribe((isAccepted) => {
        if (isAccepted) {
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
      });
    this.subscriptions.push(confirmDialogSub);
  }

  getAccounts() {
    this.accounts = [];
    this._fuseProgressiveBarService.show();
    const sub = this._adwordsAccountListService.getAccounts()
      .subscribe(res => {
        this._fuseProgressiveBarService.hide();
        this.accounts = res.data.accounts;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
        });
    this.subscriptions.push(sub);
  }

  navigateToSpamClickReport(accountId: string, adsId: string) {
    this._sessionService.setActiveAccountId(accountId);
    this._sessionService.setActiveAdsAccountId(this.adsAccountIdPipe.transform(adsId));
    this._fuseNavigationService.reloadNavigation();
    this._router.navigateByUrl('/bao-cao/click-ao');
  }

  navigateToWebsiteManagement(accountId: string, campaignNumber: number) {
    if (campaignNumber > 0)
      this._router.navigateByUrl(`/quan-ly-website/${accountId}`);
    else this._dialogService._openErrorDialog({ messages: ['Tài khoản hiện chưa được thêm chiến dịch.'] });
  }

  checkAccountAcceptance(adsId: string, isConnected: boolean) {

    if (isConnected) {
      this._dialogService._openSuccessDialog({ messages: ['Cập nhật dữ liệu thành công'] });
      return;
    }

    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._adwordsAccountListService.checkAccountAcceptance({ adWordId: adsId })
      .subscribe(res => {

        this.getAccounts();

        setTimeout(() => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openSuccessDialog({ messages: ['Cập nhật dữ liệu thành công'] });
          this._fuseNavigationService.reloadNavigation();
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
