import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { Validators } from '@angular/forms';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';

export interface DeviceReport {
  device: string;
  cost: number;
  impresstions: number;
  clicks: number;
  avgPosition: number;
  ctr: number;
}

@Component({
  selector: 'app-ban-device',
  templateUrl: './ban-device.component.html',
  styleUrls: ['./ban-device.component.scss']
})
export class BanDeviceComponent extends EditableFormBaseComponent implements OnInit {

  displayedColumns: string[] = ['device', 'cost', 'impressions', 'clicks', 'avgPosition', 'ctr', 'optimization'];
  deviceReports: DeviceReport[];
  hasReport: boolean;
  activeAdsAccountId: string;

  optimizationItemsSource = {
    mobile: [
      {
        text: 'Chạy quảng cáo',
        value: true
      },
      {
        text: 'Dừng quảng cáo',
        value: false
      }
    ],
    tablet: [
      {
        text: 'Chạy quảng cáo',
        value: true
      },
      {
        text: 'Dừng quảng cáo',
        value: false
      }
    ],
    pc: [
      {
        text: 'Chạy quảng cáo',
        value: true
      },
      {
        text: 'Dừng quảng cáo',
        value: false
      }
    ]
  };

  constructor(
    private _banIpsService: BanIpsService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    private _sessionService: SessionService,
    public _dialogService: DialogService
  ) {
    super();
    this.deviceReports = [];
  }

  ngOnInit(): void {
    this.initForm();

    const sub = this._sessionService.getAdwordId()
      .subscribe((adwordId: string) => {
        if (adwordId)
          this.getDeviceReport();
      });

    this.subscriptions.push(sub);
  }

  initForm(): void {
    this.form = this.fb.group({
      mobile: [this.optimizationItemsSource.mobile[0]],
      tablet: [this.optimizationItemsSource.tablet[0]],
      pc: [this.optimizationItemsSource.pc[0]]
    });
  }

  submitForm(): void {
    this.onSubmit();
  }

  getDeviceReport() {
    this._fuseProgressiveBarService.show();
    const sub = this._banIpsService.getDeviceReport().subscribe(res => {
      this._fuseProgressiveBarService.hide();
      this.deviceReports = res.data.reportDevice;
      this.activeAdsAccountId = this._sessionService.activeAdsAccountId;

      if (this.deviceReports.length > 0)
        this.hasReport = true;
      else this.hasReport = false;
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

  setDeviceCampaignRunning(event, deviceId: number) {
    const params = {
      device: deviceId,
      isEnabled: event.value.value
    }

    this._fuseProgressiveBarService.show();
    const sub = this._banIpsService.setDeviceCampaignRunning(params).subscribe((res: ILoginSuccess) => {
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

  post(): void { }
}
