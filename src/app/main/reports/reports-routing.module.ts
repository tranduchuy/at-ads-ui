import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpamClickReportComponent } from './spam-click-report/spam-click-report.component';
import { IpDetailComponent } from './ip-detail/ip-detail.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'click-ao',
        pathMatch: 'full',
        component: SpamClickReportComponent
      },
      {
        path: 'chi-tiet-ip/:ip',
        pathMatch: 'full',
        component: IpDetailComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
