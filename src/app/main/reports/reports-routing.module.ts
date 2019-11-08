import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpamClickReportComponent } from './spam-click-report/spam-click-report.component';
import { IpDetailComponent } from './ip-detail/ip-detail.component';
import { BlockedIpListComponent } from './blocked-ip-list/blocked-ip-list.component';
import { IpClickingReportComponent } from './ip-clicking-report/ip-clicking-report.component';
import { IpRangesClickingReportComponent } from './ip-ranges-clicking-report/ip-ranges-clicking-report.component';
import { UserStatisticComponent } from './user-statistic/user-statistic.component';
import { UuidHistoryComponent } from './uuid-history/uuid-history.component';
import { UserStatisticDetailComponent } from './user-statistic-detail/user-statistic-detail.component';
import { OverviewReportComponent } from './overview-report/overview-report.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'luu-luong-truy-cap',
        pathMatch: 'full',
        component: OverviewReportComponent,
      },
      {
        path: 'click-ao',
        pathMatch: 'full',
        component: SpamClickReportComponent
      },
      {
        path: 'chi-tiet-ip/:ip/:mainReportUrl',
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
      },
      {
        path: 'chi-tiet-thong-ke-nguoi-dung/:uuid/:mainReportUrl',
        pathMatch: 'full',
        component: UserStatisticDetailComponent
      },
      {
        path: 'uuid-history',
        pathMatch: 'full',
        component: UuidHistoryComponent
      },
    ])
  ],
  exports: [RouterModule]
})
export class ReportsRoutingModule { }
