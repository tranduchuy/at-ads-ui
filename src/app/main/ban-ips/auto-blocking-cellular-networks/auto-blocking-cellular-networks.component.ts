import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { BanIpsService } from '../ban-ips.service';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-auto-blocking-cellular-networks',
  templateUrl: './auto-blocking-cellular-networks.component.html',
  styleUrls: ['./auto-blocking-cellular-networks.component.scss']
})
export class AutoBlockingCellularNetworksComponent  extends EditableFormBaseComponent implements OnInit {

  networkItemsSource = [
    {
      text: 'Mạng VIETTEL',
      value: 'viettel'
    },
    {
      text: 'Mạng MOBI',
      value: 'mobifone'
    },
    {
      text: 'Mạng VINA',
      value: 'vinafone'
    },
    {
      text: 'Mạng VIETNAMMOBLE',
      value: 'vietnammobile'
    }
  ];

  form;
  constructor(private _banIpsService: BanIpsService,
              public _sessionService: SessionService,
              private _fuseProgressiveBarService: FuseProgressBarService,
              public _dialogService: DialogService) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      networks: [[]]
    });
  }

  onClickBtnSubmit(): void {
    this.onSubmit();
  }

  private generatePostObject(): any {
    const params = {...this.form.value};

    const defaultObject = {
      vinafone: false,
      mobifone: false,
      viettel: false,
      vietnammobile: false
    };

    let paramsObject = {};
    params.networks.map(key => {
      paramsObject[key] = true;
    });

    paramsObject = Object.assign(defaultObject, paramsObject);

    return paramsObject;
  }

  post(): void {
    const params = this.generatePostObject();
    this._fuseProgressiveBarService.show();
    const sub = this._banIpsService.autoBlocking3G4G(params).subscribe((res: ILoginSuccess) =>
      {
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

}
