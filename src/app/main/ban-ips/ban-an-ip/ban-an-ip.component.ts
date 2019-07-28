import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';

import { BanIpsService } from '../ban-ips.service';
import { DialogService } from 'app/shared/services/dialog.service';
import { FuseProgressBarService } from '@fuse/components/progress-bar/progress-bar.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ILoginSuccess } from 'app/authentication/login/models/i-login-success';
import { SessionService } from '../../../shared/services/session.service';

@Component({
  selector: 'app-ban-an-ip',
  templateUrl: './ban-an-ip.component.html',
  styleUrls: ['./ban-an-ip.component.scss']
})
export class BanAnIPComponent extends EditableFormBaseComponent implements OnInit {

  constructor(
    private _banIpsService: BanIpsService,
    public _sessionService: SessionService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService
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
      bannedIP: ['', [Validators.required, this.validatorService.checkIP]]
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
      ips: [{ ...this.form.value }.bannedIP]
    };

    return params;
  }
}
