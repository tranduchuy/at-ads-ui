import { NgModule } from '@angular/core';
import { BanIPsRoutingModule } from './ban-ips-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { InputTextModule } from '../../shared/components/input-text/input-text.module';
import { InputTextareaModule } from '../../shared/components/input-textarea/input-textarea.module';
import { SelectTextModule } from '../../shared/components/select-text/select-text.module';
import { CheckboxGroupModule } from '../../shared/components/checkbox-group/checkbox-group.module';

import { FuseSharedModule } from '@fuse/shared.module';

import { BanAnIPComponent } from './ban-an-ip/ban-an-ip.component';
import { BanOptionalIPComponent } from './ban-optional-ip/ban-optional-ip.component';
import { AutoBanIPComponent } from './auto-ban-ip/auto-ban-ip.component';
import { AutoBlockingRangeIpsComponent } from './auto-blocking-range-ips/auto-blocking-range-ips.component';
import { AutoBlockingCellularNetworksComponent } from './auto-blocking-cellular-networks/auto-blocking-cellular-networks.component';
import { BanDeviceComponent } from './ban-device/ban-device.component';
import { MatSelectModule, MatCheckboxModule } from '@angular/material';
import { WhitelistIpComponent } from './whitelist-ip/whitelist-ip.component';

@NgModule({
  declarations: [
    BanAnIPComponent,
    BanOptionalIPComponent,
    AutoBlockingRangeIpsComponent,
    AutoBanIPComponent,
    AutoBlockingCellularNetworksComponent,
    BanDeviceComponent,
    WhitelistIpComponent
  ],
  imports: [

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatCheckboxModule,

    CheckboxGroupModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    SelectTextModule,

    FuseSharedModule,

    BanIPsRoutingModule,
  ],
  providers: []
})
export class BanIPsModule { }
