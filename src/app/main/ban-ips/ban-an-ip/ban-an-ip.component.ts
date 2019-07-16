import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ValidateIP } from '../../../shared/validators/IP.validator';

import {BanAnIPService} from './ban-an-ip.service';

@Component({
  selector: 'app-ban-an-ip',
  templateUrl: './ban-an-ip.component.html',
  styleUrls: ['./ban-an-ip.component.scss']
})
export class BanAnIPComponent implements OnInit {

  banIPForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _banAnIPService: BanAnIPService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    this._banAnIPService.banAnIP(this.banIPForm.get('bannedIP').value);
  }

  initForm() {
    this.banIPForm = this._formBuilder.group({
      bannedIP: ['', [Validators.required, ValidateIP]]
    });
  }
}
