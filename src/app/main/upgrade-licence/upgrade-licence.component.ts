import { Component, OnInit } from '@angular/core';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { DialogService } from '../../shared/services/dialog.service';
import { SessionService } from 'app/shared/services/session.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';

@Component({
  selector: 'app-upgrade-licence',
  templateUrl: './upgrade-licence.component.html',
  styleUrls: ['./upgrade-licence.component.scss']
})
export class UpgradeLicenceComponent extends PageBaseComponent implements OnInit {
  loggedInUser: any;
  isRegisterButtonNotDisplayed: boolean;

  constructor(
    private _dialogService: DialogService,
    private _sessionService: SessionService,
    private _fuseProgressBarService: FuseProgressBarService
  ) {
    super();
  }

  ngOnInit() {
    this._fuseProgressBarService.show();
    const sub = this._sessionService.getUser()
      .subscribe(user => {
        if (user) {
          this.loggedInUser = user;
          if (user.licence.type === 'CUSTOM')
            this.isRegisterButtonNotDisplayed = true;
          else this.isRegisterButtonNotDisplayed = false;
          this._fuseProgressBarService.hide();
        }
      });
    this.subscriptions.push(sub);
  }

  openUpgradeLicenceDialog(licenceType: string, licenceName: string) {
    this._dialogService._openUpgradeLicenceDialog(licenceType, licenceName);
  }

}
