import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SpamClickReportComponent } from './spam-click-report/spam-click-report.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'click-ao',
        pathMatch: 'full',
        component: SpamClickReportComponent
      }
    ])
  ]
})
export class ReportsRoutingModule { }
