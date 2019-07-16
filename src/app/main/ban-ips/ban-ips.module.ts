import { NgModule } from '@angular/core';
import { BanIPsRoutingModule } from './ban-ips-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FuseSharedModule } from '@fuse/shared.module';

import { BanAnIPComponent } from './ban-an-ip/ban-an-ip.component';

@NgModule({
  declarations: [BanAnIPComponent],
  imports: [

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

    ReactiveFormsModule,

    FuseSharedModule,

    BanIPsRoutingModule,
  ]
})
export class BanIPsModule { }
