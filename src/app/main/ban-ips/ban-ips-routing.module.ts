import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BanAnIPComponent } from './ban-an-ip/ban-an-ip.component';
import { BanOptionalIPComponent } from './ban-optional-ip/ban-optional-ip.component';
import { AutoBlockingRangeIpsComponent } from './auto-blocking-range-ips/auto-blocking-range-ips.component';
import { AutoBanIPComponent } from './auto-ban-ip/auto-ban-ip.component';
import { AutoBlockingCellularNetworksComponent } from './auto-blocking-cellular-networks/auto-blocking-cellular-networks.component';
import { BanDeviceComponent } from './ban-device/ban-device.component';
import { WhitelistIpComponent } from './whitelist-ip/whitelist-ip.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'chan-1-ip',
        pathMatch: 'full',
        component: BanAnIPComponent
      },
      {
        path: 'chan-ip-tuy-chinh',
        pathMatch: 'full',
        component: BanOptionalIPComponent
      },
      {
        path: 'whitelist-ip',
        pathMatch: 'full',
        component: WhitelistIpComponent
      },
      {
        path: 'chan-ip-tu-dong',
        pathMatch: 'full',
        component: AutoBanIPComponent
      },
      {
        path: 'chan-ip-theo-nhom',
        pathMatch: 'full',
        component: AutoBlockingRangeIpsComponent
      },
      {
        path: 'chan-ip-theo-mang-di-dong',
        pathMatch: 'full',
        component: AutoBlockingCellularNetworksComponent
      },
      {
        path: 'chan-ip-theo-thiet-bi',
        pathMatch: 'full',
        component: BanDeviceComponent
      }
    ])
  ]
})
export class BanIPsRoutingModule { }
