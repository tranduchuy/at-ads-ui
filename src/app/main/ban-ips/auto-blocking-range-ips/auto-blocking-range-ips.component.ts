import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { Validators } from '@angular/forms';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';
import { SessionService } from '../../../shared/services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-blocking-range-ips',
  templateUrl: './auto-blocking-range-ips.component.html',
  styleUrls: ['./auto-blocking-range-ips.component.scss']
})
export class AutoBlockingRangeIpsComponent extends EditableFormBaseComponent implements OnInit {

  form;

  isProcessing: boolean = false;

  constructor(private _banIpsService: BanIpsService,
    public _sessionService: SessionService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService,
    private _router: Router
  ) {
    super();
  }

  itemsSource = {
    classC: [
      {
        text: 'Không kích hoạt (được đề nghị)',
        value: false
      },
      {
        text: 'Kích hoạt',
        value: true
      }
    ],
    classD: [
      {
        text: 'Không kích hoạt (được đề nghị)',
        value: false
      },
      {
        text: 'Kích hoạt',
        value: true
      }
    ]
  };

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      classC: [this.itemsSource.classC[0], [Validators.required]],
      classD: [this.itemsSource.classD[0], [Validators.required]]
    });
  }

  post(): void {
    const params = this.generatePostObject();
    this.isProcessing = true;
    this._fuseProgressiveBarService.show();
    const sub = this._banIpsService.autoBlockingRangeIP(params).subscribe((res: ILoginSuccess) => {
      this._dialogService._openSuccessDialog(res);
      this._fuseProgressiveBarService.hide();
      this.isProcessing = false;
    },
      (error: HttpErrorResponse) => {
        if (error.error.messages) {
          this._dialogService._openErrorDialog(error.error);
        }
        this._fuseProgressiveBarService.hide();
        this.isProcessing = false;
      }
    );
    this.subscriptions.push(sub);
  }


  onClickBtnSubmit(): void {
    this.onSubmit();
  }

  private generatePostObject(): any {
    const params = { ...this.form.value };

    params.classC = params.classC.value;
    params.classD = params.classD.value;


    return params;
  }


}
