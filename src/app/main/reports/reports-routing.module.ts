import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpamClickReportComponent } from './spam-click-report/spam-click-report.component';
import { IpDetailComponent } from './ip-detail/ip-detail.component';
import { BlockedIpListComponent } from './blocked-ip-list/blocked-ip-list.component';
import { IpClickingReportComponent } from './ip-clicking-report/ip-clicking-report.component';
import { IpRangesClickingReportComponent } from './ip-ranges-clicking-report/ip-ranges-clicking-report.component';
import { UserStatisticComponent } from './user-statistic/user-statistic.component';

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
        path: 'nhom-ip-dang-click',
        pathMatch: 'full',
        component: IpRangesClickingReportComponent
      },
      {
        path: 'danh-sach-ip-da-chan',
        pathMatch: 'full',
        component: BlockedIpListComponent
      },
      {
        path: 'thong-ke-nguoi-dung',
        pathMatch: 'full',
        component: UserStatisticComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
