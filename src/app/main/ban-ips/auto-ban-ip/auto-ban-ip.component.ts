import { Component, OnInit } from '@angular/core';
import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';
import { Validators } from '@angular/forms';
import { BanIpsService } from '../ban-ips.service';
import { ILoginSuccess } from '../../../authentication/login/models/i-login-success';
import { HttpErrorResponse } from '@angular/common/http';
import { FuseProgressBarService } from '../../../../@fuse/components/progress-bar/progress-bar.service';
import { DialogService } from '../../../shared/services/dialog.service';

@Component({
  selector: 'app-auto-ban-ip',
  templateUrl: './auto-ban-ip.component.html',
  styleUrls: ['./auto-ban-ip.component.scss']
})
export class AutoBanIPComponent extends EditableFormBaseComponent implements OnInit {



  constructor(private _banIpsService: BanIpsService,
    private _fuseProgressiveBarService: FuseProgressBarService,
    public _dialogService: DialogService) {
    super();
  }

  itemsSource = {
    clickNumber: [
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
    removedTime:[
      {
        text: 'Không xóa (được đề nghị)',
        value: false
      },
      {
        text: 'Cho phép xóa',
        value: true
      },
    ]
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.form = this.fb.group({
      clickNumber: [this.itemsSource.clickNumber[0], [Validators.required]],
      removedTime: [this.itemsSource.removedTime[0], [Validators.required]]
    })
  }

  onSubmitForm(){
    this.onSubmit();
  }

  private generatePostObject(){
    
  }

  post(): void {

  }

}
