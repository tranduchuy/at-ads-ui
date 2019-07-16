import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BanAnIPComponent } from './ban-an-ip/ban-an-ip.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'chan-1-ip',
        pathMatch: 'full',
        component: BanAnIPComponent
      }
    ])
  ]
})
export class BanIPsRoutingModule { }
