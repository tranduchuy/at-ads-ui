import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpamClickReportComponent } from './spam-click-report/spam-click-report.component';
import { IpDetailComponent } from './ip-detail/ip-detail.component';
import { BlockedIpListComponent } from './blocked-ip-list/blocked-ip-list.component';
import { IpClickingReportComponent } from './ip-clicking-report/ip-clicking-report.component';

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
      },
      {
        path: 'ip-dang-click',
        pathMatch: 'full',
        component: IpClickingReportComponent
      },
      {
        path: 'danh-sach-ip-da-chan',
        pathMatch: 'full',
        component: BlockedIpListComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
