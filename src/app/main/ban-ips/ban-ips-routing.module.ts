import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BanAnIPComponent } from './ban-an-ip/ban-an-ip.component';
import { BanOptionalIPComponent } from './ban-optional-ip/ban-optional-ip.component';


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
      }
    ])
  ]
})
export class BanIPsRoutingModule { }
