import { Component, OnInit } from '@angular/core';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { DialogService } from '../../shared/services/dialog.service';
import { SessionService } from 'app/shared/services/session.service';
import { Generals } from 'app/shared/constants/generals';
import { LicenceService } from './licence.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';

interface Licence {
  name: string;
  type: string;
  price: number;
  isDiscount: boolean;
  discountMonths: number[]
}

@Component({
  selector: 'app-upgrade-licence',
  templateUrl: './upgrade-licence.component.html',
  styleUrls: ['./upgrade-licence.component.scss']
})
export class UpgradeLicenceComponent extends PageBaseComponent implements OnInit {
  loggedInUser: any;
  isRegisterButtonDisplayed: boolean;
  LICENCE = Generals.Licence;
  packages = [];

  constructor(
    private _dialogService: DialogService,
    private _sessionService: SessionService,
    private _licenceService: LicenceService,
    private _fuseProgressBarService: FuseProgressBarService
  ) {
    super();
  }

  ngOnInit() {
    const sub = this._sessionService.getUser()
      .subscribe(user => {
        if (user) {
          this.loggedInUser = user;
          if (user.licence && user.licence.type === this.LICENCE.CUSTOM.type)
            this.isRegisterButtonDisplayed = false;
          else this.isRegisterButtonDisplayed = true;

          this.getPackages();
        }
      });
    this.subscriptions.push(sub);

    this.onListAccountsLoaded();
  }

  onListAccountsLoaded() {
    const sub = this._sessionService.getListAccounts()
      .subscribe(listAccounts => {
        if (listAccounts) {
          this._fuseProgressBarService.hide();
        } else {
          this._fuseProgressBarService.show();
        }
      });
    this.subscriptions.push(sub);
  }

  openUpgradeLicenceDialog(licenceType: string) {
    const licence = this.packages.find(p => p.type === licenceType);
    if (licence) {
      const params: Licence = {
        name: licence.name,
        type: licence.type,
        price: licence.price,
        isDiscount: licence.isDiscount,
        discountMonths: licence.discountMonths
      }
      this._dialogService._openUpgradeLicenceDialog(params);
    }
  }

  openContactInfoDialog(contactInfo: string) {
    this._dialogService._openInfoDialog(contactInfo);
  }

  getPackages() {
    const sub = this._licenceService.getPackages()
      .subscribe(res => {
        this.packages = res.data.packages;
      }, (error: HttpErrorResponse) => {
        this.packages = [];
        this._dialogService._openErrorDialog(error.error);
      });
    this.subscriptions.push(sub);
  }
}
