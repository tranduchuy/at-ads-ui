import { Component, OnInit } from '@angular/core';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';
import { DialogService } from '../../shared/services/dialog.service';

@Component({
  selector: 'app-upgrade-licence',
  templateUrl: './upgrade-licence.component.html',
  styleUrls: ['./upgrade-licence.component.scss']
})
export class UpgradeLicenceComponent extends PageBaseComponent implements OnInit {

  constructor(
    private _dialogService: DialogService
  ) {
    super();
  }

  ngOnInit() {
  }

  openUpgradeLicenceDialog(licenceType: string, licenceName: string) {
    this._dialogService._openUpgradeLicenceDialog(licenceType, licenceName);
  }

}
