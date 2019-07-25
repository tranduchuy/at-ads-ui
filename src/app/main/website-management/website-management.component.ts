import { Component, OnInit, Input } from '@angular/core';
import { EditableFormBaseComponent } from '../../shared/components/base/editable-form-base.component';
import { FuseProgressBarService } from '../../../@fuse/components/progress-bar/progress-bar.service';
import { ILoginSuccess } from '../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { DialogService } from '../../shared/services/dialog.service';
import { SessionService } from 'app/shared/services/session.service';
import { ValidatorsService } from 'app/shared/services/validator.service';
import { Validators } from '@angular/forms';
import { WebsiteManagementService } from './website-management.service';
import { AdsAccountIdPipe } from 'app/shared/pipes/ads-account-id/ads-account-id.pipe';

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
  selector: 'app-website-management',
  templateUrl: './website-management.component.html',
  styleUrls: ['./website-management.component.scss']
})
export class WebsiteManagementComponent extends EditableFormBaseComponent implements OnInit {

  accounts: Account[];

  accountItemsSource: any[];

  adsAccountIdPipe: AdsAccountIdPipe = new AdsAccountIdPipe();

  selectedAdsId: string;

  constructor(
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _sessionService: SessionService,
    private _validatorsService: ValidatorsService,
    private _websiteManagementService: WebsiteManagementService
  ) {
    super();
    this.accounts = [];
    this.accountItemsSource = [];
    this.selectedAdsId = '';
  }

  ngOnInit() {
    this.getAccounts();
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      adsId: [''],
      domain: ['', [Validators.required]]
    })
  }

  onSubmitForm() {
    this.onSubmit();
  }

  generatePostObject() {
    const body = { ...this.form.value };
    const params = {
      domain: body.domain,
      accountId: body.adsId.value
    }
    return params;
  }

  post() {
    const params = this.generatePostObject();

    this._fuseProgressiveBarService.show();
    const sub = this._websiteManagementService.addWebsite(params).subscribe((res: ILoginSuccess) => {
      this._dialogService._openSuccessDialog(res);
      this._fuseProgressiveBarService.hide();
    },
      (error: HttpErrorResponse) => {
        if (error.error.messages) {
          this._dialogService._openErrorDialog(error.error);
        }
        this._fuseProgressiveBarService.hide();
      }
    );
    this.subscriptions.push(sub);
  }

  onSelectAdsId(event) {
    this.selectedAdsId = event.source.value.text;
  }

  getAccounts() {
    this._fuseProgressiveBarService.show();
    const sub = this._websiteManagementService.getAccounts().subscribe(res => {
      this.accounts = res.data.accounts;

      if (this.accounts.length > 0) {

        for (const item of this.accounts) {
          item.websites = [];
          const getWebsiteSub = this._websiteManagementService.getWebsites(item.id).subscribe(res => {
            this._fuseProgressiveBarService.hide();
            item.websites = res.data.website;

            this.accountItemsSource.push({
              text: this.adsAccountIdPipe.transform(item.adsId),
              value: item.id
            });

            if (this.accountItemsSource.length === 1) {
              this.form.controls['adsId'].setValue(this.accountItemsSource[0]);
              this.selectedAdsId = this.form.controls['adsId'].value.text;
            }
          },
            (error: HttpErrorResponse) => {
              if (error.error.messages) {
                this._fuseProgressiveBarService.hide();
                //this._dialogService._openErrorDialog(error.error);
              }
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
