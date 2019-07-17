import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';

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
    this._banAnIPService.banAnIP(this.form.get('bannedIP').value);
  }
}
