import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BanAnIPComponent } from './ban-an-ip/ban-an-ip.component';
import { BanOptionalIPComponent } from './ban-optional-ip/ban-optional-ip.component';
import { AutoBanIPComponent } from './auto-ban-ip/auto-ban-ip.component';


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
        path: 'chan-ip-tu-dong',
        pathMatch: 'full',
        component: AutoBanIPComponent
      }
    ])
  ]
})
export class BanIPsRoutingModule { }
