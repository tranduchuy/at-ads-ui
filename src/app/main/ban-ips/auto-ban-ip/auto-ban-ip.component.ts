import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { Validators } from '@angular/forms';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-auto-ban-ip',
  templateUrl: './auto-ban-ip.component.html',
  styleUrls: ['./auto-ban-ip.component.scss']
})
export class AutoBanIPComponent extends EditableFormBaseComponent implements OnInit {

  itemsSource = {
    maxClick: [
      {
        text: 'Không kích hoạt',
        value: 0
      },
      {
        text: '1 lần',
        value: 1
      },
      {
        text: '2 lần (được đề nghị)',
        value: 2
      },
      {
        text: '3 lần',
        value: 3
      },
      {
        text: '4 lần',
        value: 4
      },
      {
        text: '5 lần',
        value: 5
      },
    ],
    autoRemove: [
      {
        text: 'Không xóa (được đề nghị)',
        value: false
      },
      {
        text: 'Cho phép xóa',
        value: true
      },
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
      maxClick: [this.itemsSource.maxClick[0], [Validators.required]],
      autoRemove: [this.itemsSource.autoRemove[0], [Validators.required]]
    });
  }

  onSubmitForm(): void {
    this.onSubmit();
  }

  post(): void {
    const params = this.generatePostObject();

    this._fuseProgressiveBarService.show();
    const sub = this._banIpsService.autoBlockingIP(params).subscribe((res: ILoginSuccess) => {
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
    const selections = { ...this.form.value };
    const params = {
      maxClick: selections.maxClick.value,
      autoRemove: selections.autoRemove.value
    };
    return params;
  }
}
