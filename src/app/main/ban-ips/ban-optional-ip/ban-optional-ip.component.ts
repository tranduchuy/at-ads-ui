import { Component, OnInit } from '@angular/core';

import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { Validators } from '@angular/forms';

import { BanIpsService } from '../ban-ips.service';


export interface BannedIP {
  order: string;
  ip: string;
  status: string;
}

const ELEMENT_DATA: BannedIP[] = [
  {
    order: 'MỚI',
    ip: '192.168.1.1',
    status: 'Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch. Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch.Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch',
  },
  {
    order: 'MỚI',
    ip: '192.168.1.1',
    status: 'Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch. Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch.Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch',
  },
  {
    order: 'MỚI',
    ip: '192.168.1.1',
    status: 'Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch. Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch.Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch',
  },
  {
    order: 'MỚI',
    ip: '192.168.1.1',
    status: 'Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch. Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch.Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch',
  },
  {
    order: 'MỚI',
    ip: '192.168.1.1',
    status: 'Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch. Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch.Chặn thành công 192.168.1.1 vào tổng 20 chiến dịch',
  },
];

@Component({
  selector: 'app-ban-optional-ip',
  templateUrl: './ban-optional-ip.component.html',
  styleUrls: ['./ban-optional-ip.component.scss']
})
export class BanOptionalIPComponent extends EditableFormBaseComponent implements OnInit {

  displayedColumns: string[] = ['order', 'ip', 'status', 'task', 'unlockButton'];
  dataSource = ELEMENT_DATA;

  constructor(
    private _banIPService: BanIpsService
  ) {
    super();
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmitForm(): void {
    this.onSubmit();
  }

  initForm(): void {
    this.form = this.fb.group({
      listBannedIP: ['', [Validators.required]]
    })
  }

  post(): void {
    const ip = this.form.get('listBannedIP').value;
    this._banIPService.banOptionalIP(ip);
  }
}
