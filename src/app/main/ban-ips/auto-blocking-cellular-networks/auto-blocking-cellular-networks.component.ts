import { Component, OnInit } from '@angular/core';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { BanIpsService } from '../ban-ips.service';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';
import { PageBaseComponent } from 'app/shared/components/base/page-base.component';

@Component({
  selector: 'app-auto-blocking-cellular-networks',
  templateUrl: './auto-blocking-cellular-networks.component.html',
  styleUrls: ['./auto-blocking-cellular-networks.component.scss']
})
export class AutoBlockingCellularNetworksComponent extends PageBaseComponent implements OnInit {

  isProcessing: boolean = false;
  mobileNetworks: any = {
    viettel: false,
    mobifone: false,
    vinafone: false,
    vietnammobile: false,
    fpt: false
  }

  constructor(private _banIpsService: BanIpsService,
    public _sessionService: SessionService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
  ) {
    super();
  }

  ngOnInit(): void {
    const sub = this._sessionService.getAccountId()
      .subscribe((accountId: string) => {
        if (accountId)
          this.getAutoBlocking3G4GSetting();
      });
    this.subscriptions.push(sub);
  }

  selectNetwork(event, network: string) {
    if(event.checked)
      this.mobileNetworks[network] = true;
    else this.mobileNetworks[network] = false;
  }

  getAutoBlocking3G4GSetting() {
    this._fuseProgressiveBarService.show();

    const sub = this._banIpsService.getBlockingIPSettings()
      .subscribe(res => {
        this._fuseProgressiveBarService.hide();
        this.mobileNetworks = res.data.setting.mobileNetworks;
      },
        (error: HttpErrorResponse) => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openErrorDialog(error.error);
        });
    this.subscriptions.push(sub);
  }

  setAutoBlocking3G4G() {
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();

    const sub = this._banIpsService.autoBlocking3G4G(this.mobileNetworks)
      .subscribe((res: ILoginSuccess) => {

        this.getAutoBlocking3G4GSetting();

        setTimeout(() => {
          this._fuseProgressiveBarService.hide();
          this._dialogService._openSuccessDialog(res);
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
