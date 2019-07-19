import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { Validators } from '@angular/forms';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';

export interface BannedDevice {
  device: string;
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
]

@Component({
  selector: 'app-ban-device',
  templateUrl: './ban-device.component.html',
  styleUrls: ['./ban-device.component.scss']
})
export class BanDeviceComponent implements OnInit {

  displayedColumns: string[] = ['device', 'cost', 'display', 'click', 'guest', 'avgPosition', 'costPerGuest', 'optimization'];
  dataSource = ELEMENT_DATA;

  constructor(private _banIpsService: BanIpsService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService) {
  }

  ngOnInit() {
  }

}
