import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { Validators, SelectControlValueAccessor } from '@angular/forms';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';

export interface BannedDevice {
  device: string;
  type: string;
  cost: number;
  display: number;
  click: number;
  guest: number;
  avgPosition: number;
  costPerGuest: number;
  optimization: any[];
}

const ELEMENT_DATA: BannedDevice[] = [
  {
    device: 'Di động',
    type: 'mobile',
    cost: 78386830,
    display: 35102,
    click: 3286,
    guest: 336,
    avgPosition: 2.8,
    costPerGuest: 233475,
    optimization: [
      {
        text: 'Chạy quảng cáo',
        value: true,
      },
      {
        text: 'Dừng quảng cáo',
        value: false,
      }
    ]
  },
  {
    device: 'Tablet',
    type: 'tablet',
    cost: 78386830,
    display: 35102,
    click: 3286,
    guest: 336,
    avgPosition: 2.8,
    costPerGuest: 233475,
    optimization: [
      {
        text: 'Chạy quảng cáo',
        value: true,
      },
      {
        text: 'Dừng quảng cáo',
        value: false,
      }
    ]
  },
  {
    device: 'Máy tính',
    type: 'pc',
    cost: 78386830,
    display: 35102,
    click: 3286,
    guest: 336,
    avgPosition: 2.8,
    costPerGuest: 233475,
    optimization: [
      {
        text: 'Chạy quảng cáo',
        value: true,
      },
      {
        text: 'Dừng quảng cáo',
        value: false,
      }
    ]
  },
];

@Component({
  selector: 'app-ban-device',
  templateUrl: './ban-device.component.html',
  styleUrls: ['./ban-device.component.scss']
})
export class BanDeviceComponent extends EditableFormBaseComponent implements OnInit {

  displayedColumns: string[] = ['device', 'cost', 'display', 'click', 'guest', 'avgPosition', 'costPerGuest', 'optimization'];
  dataSource = ELEMENT_DATA;

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
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      mobile: [this.optimizationItemsSource.mobile[0], [Validators.required]],
      tablet: [this.optimizationItemsSource.tablet[0], [Validators.required]],
      pc: [this.optimizationItemsSource.pc[0], [Validators.required]]
    });
  }

  submitForm(): void {
    this.onSubmit();
  }

  private generatePostObject(): any {
    const selections = {...this.form.value};
    const params = {
      mobile: selections.mobile.value,
      tablet: selections.tablet.value,
      pc: selections.pc.value
    };
    return params;
  }

  post(): void {
    const params = this.generatePostObject();

    this._fuseProgressiveBarService.show();
    const sub = this._banIpsService.autoBlockingDevice(params).subscribe((res: ILoginSuccess) => {
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
