import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { Validators } from '@angular/forms';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';


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
    private _banIpsService: BanIpsService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    private _sessionService: SessionService,
    public _dialogService: DialogService) {
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
      listBannedIP: ['', [Validators.required, this.validatorService.checkListIP]]
    });
  }

  post(): void {
    const params = this.generatePostObject();

    this._fuseProgressiveBarService.show();
    const sub = this._banIpsService.blockIPs(params).subscribe((res: ILoginSuccess) => {
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

  private generatePostObject(): any {
    const params = {
      action: 'ADD',
      ips: {...this.form.value}.listBannedIP.split(/\r?\n/)
    };

    return params;
  }
}
