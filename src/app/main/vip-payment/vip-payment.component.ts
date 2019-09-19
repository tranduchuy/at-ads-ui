import { Component, OnInit } from '@angular/core';
import { AdwordsAccountListService } from '../adwords-account-list/adwords-account-list.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { AdsAccountIdPipe } from 'app/shared/pipes/ads-account-id/ads-account-id.pipe';

@Component({
  selector: 'app-vip-payment',
  templateUrl: './vip-payment.component.html',
  styleUrls: ['./vip-payment.component.scss']
})
export class VipPaymentComponent extends PageBaseComponent implements OnInit {

  packagesCols: string[] = ['name', 'price', 'recommendance'];

  packages = [
    {
      name: '1 tháng (~30 ngày)',
      price: '500.000 VNĐ',
      recommendance: '',
      discount: ''
    },
    {
      name: '3 tháng (~90 ngày)',
      price: '1.350.000 VNĐ',
      recommendance: 'Khuyên dùng',
      discount: 'Giảm 10%'
    },
    {
      name: '6 tháng (~180 ngày)',
      price: '2.400.000 VNĐ',
      recommendance: 'Yêu thích',
      discount: 'Giảm 20%'
    },
    {
      name: '12 tháng (~365 ngày)',
      price: '3.000.000 VNĐ',
      recommendance: 'HOT',
      discount: 'Giảm 40%'
    },
  ];

  adsAccountIdPipe = new AdsAccountIdPipe();
  accounts = [];
  websites = [];
  selectedAccount: string = '';
  selectedAccountId: string = '';
  selectedWebsite: string = '';
  selectedWebsiteCode: string = '';
  isProcessing: boolean = false;

  constructor(
    private _adwordsAccountListService: AdwordsAccountListService,
    private _fuseProgressBarService: FuseProgressBarService
  ) {
    super();
  }

  ngOnInit() {
    this.getAccountList();
  }

  getAccountList() {
    this.isProcessing = true;
    this._fuseProgressBarService.show();

    const sub = this._adwordsAccountListService.getAccounts()
      .subscribe(
        res => {
          const data = JSON.parse(JSON.stringify(res.data.accounts));

          this.accounts = (data || [])
            .map(item => {
              return {
                id: item.id,
                adsId: this.adsAccountIdPipe.transform(item.adsId),
                isFree: item.isFree
              }
            });

          setTimeout(() => {

            if (this.accounts.length > 0) {

              for (const account of data)
                this.websites[this.adsAccountIdPipe.transform(account.adsId)] = account.websites;

              this.selectedAccount = this.accounts[0].adsId;
              this.selectedAccountId = this.accounts.find(item => item.adsId === this.selectedAccount).id;
              this.selectedWebsite = this.websites[this.selectedAccount][0].domain;
              this.selectedWebsiteCode = this.websites[this.selectedAccount][0].code;
            }

            this._fuseProgressBarService.hide();
            this.isProcessing = false;
          }, 0);
        },
        (error: HttpErrorResponse) => {
          this._fuseProgressBarService.hide();
          this.isProcessing = false;
        });
    this.subscriptions.push(sub);
  }

  onSelectAccount(event) {
    this.selectedAccount = event.value;
    this.selectedAccountId = this.accounts.find(item => item.adsId === this.selectedAccount).id;

    if (this.websites[this.selectedAccount].length > 0) {
      this.selectedWebsite = this.websites[this.selectedAccount][0].domain;
      this.selectedWebsiteCode = this.websites[this.selectedAccount][0].code;
    }
    else {
      this.selectedWebsite = '';
      this.selectedWebsiteCode = '';
    }
  }

  onSelectAccountWebsite(accountWebsiteIndex: number) {
    this.selectedWebsiteCode = this.websites[this.selectedAccount][accountWebsiteIndex].code;
  }
}
