import { NgModule } from '@angular/core';
import { BanIPsRoutingModule } from './ban-ips-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';

import { FuseSharedModule } from '@fuse/shared.module';

import { BanAnIPComponent } from './ban-an-ip/ban-an-ip.component';
import { BanOptionalIPComponent } from './ban-optional-ip/ban-optional-ip.component';

import { InputTextModule } from '../../shared/components/input-text/input-text.module';
import { InputTextareaModule } from '../../shared/components/input-textarea/input-textarea.module';
import { AutoBlockingRangeIpsComponent } from './auto-blocking-range-ips/auto-blocking-range-ips.component';

@NgModule({
  declarations: [
    BanAnIPComponent,
    BanOptionalIPComponent,
    AutoBlockingRangeIpsComponent,
  ],
  imports: [

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,

    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,

    FuseSharedModule,

    BanIPsRoutingModule,
  ]
})
export class BanIPsModule { }
