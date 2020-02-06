import { Component, OnInit } from '@angular/core';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { DialogService } from '../../shared/services/dialog.service';
import { SessionService } from 'app/shared/services/session.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { Generals } from 'app/shared/constants/generals';
import { LicenceService } from './licence.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-upgrade-licence',
  templateUrl: './upgrade-licence.component.html',
  styleUrls: ['./upgrade-licence.component.scss']
})
export class UpgradeLicenceComponent extends PageBaseComponent implements OnInit {
  loggedInUser: any;
  isRegisterButtonDisplayed: boolean;
  LICENCE = Generals.Licence;
  SUPPORTERS = Generals.Contact.supporters;
  packages = [];

  constructor(
    private _dialogService: DialogService,
    private _sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService,
    private _licenceService: LicenceService
  ) {
    super();
  }

  ngOnInit() {
    this._fuseProgressBarService.show();
    const sub = this._sessionService.getUser()
      .subscribe(user => {
        if (user) {
          this.loggedInUser = user;
          if (user.licence.type === this.LICENCE.CUSTOM.type)
            this.isRegisterButtonDisplayed = false;
          else this.isRegisterButtonDisplayed = true;

          this.getPackages();
        }
      });
    this.subscriptions.push(sub);
  }

  openUpgradeLicenceDialog(licenceType: string, licenceName: string) {
    this._dialogService._openUpgradeLicenceDialog(licenceType, licenceName);
  }

  openContactInfoDialog() {
    this._dialogService._openInfoDialog(`Vui lòng liên hệ hỗ trợ viên ${this.SUPPORTERS[0].moreInfo} để được hỗ trợ nâng cấp gói này.`);
  }

  getPackages() {
    this._fuseProgressBarService.show();
    const sub = this._licenceService.getPackages()
      .subscribe(res => {
        this.packages = res.data.packages.reverse();
        this._fuseProgressBarService.hide();
      }, (error: HttpErrorResponse) => {
        this.packages = [];
        this._dialogService._openErrorDialog(error.error);
        this._fuseProgressBarService.hide();
      });
    this.subscriptions.push(sub);
  }
}
