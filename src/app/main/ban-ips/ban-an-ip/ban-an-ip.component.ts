import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidateIP } from '../../../shared/validators/IP.validator';

import { BanAnIPService } from './ban-an-ip.service';

import { EditableFormBaseComponent } from '../../../shared/components/base/editable-form-base.component';

@Component({
  selector: 'app-ban-an-ip',
  templateUrl: './ban-an-ip.component.html',
  styleUrls: ['./ban-an-ip.component.scss']
})
export class BanAnIPComponent extends EditableFormBaseComponent implements OnInit {

  constructor(
    private _banAnIPService: BanAnIPService
  ) {
    super();
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmitForm() {
    this.onSubmit();
  }

  initForm() {
    this.form = this.fb.group({
      bannedIP: ['', [Validators.required, this.validatorService.checkIP]]
    });
  }

  post() {
    this._banAnIPService.banAnIP(this.form.get('bannedIP').value);
  }
}
