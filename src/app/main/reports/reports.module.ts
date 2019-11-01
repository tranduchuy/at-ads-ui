import { NgModule } from '@angular/core';
import { ReportsRoutingModule } from './reports-routing.module';

import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatBadgeModule } from '@angular/material/badge';

import { InputTextModule } from '../../shared/components/input-text/input-text.module';
import { InputTextareaModule } from '../../shared/components/input-textarea/input-textarea.module';
import { SelectTextModule } from '../../shared/components/select-text/select-text.module';
import { CheckboxGroupModule } from '../../shared/components/checkbox-group/checkbox-group.module';

import { FuseSharedModule } from '@fuse/shared.module';

import { SpamClickReportComponent } from './spam-click-report/spam-click-report.component';

import { NgxChartsModule } from '@swimlane/ngx-charts';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { ChartsModule } from 'ng2-charts';
import { MatRadioModule, MatDatepickerModule, MatPaginatorModule, MatPaginatorIntl, MatDividerModule, MatTabsModule, MatTreeModule, MatProgressBarModule, MatMenuModule, MatExpansionModule, MatSelectModule } from '@angular/material';
import { NgxDaterangepickerMd } from 'ngx-datepicker-material';
import { IpDetailComponent } from './ip-detail/ip-detail.component';
import { BlockedIpListComponent } from './blocked-ip-list/blocked-ip-list.component';

import {getVietnamesePaginatorIntl} from './vietnamese-paginator-intl';
import { IpClickingReportComponent } from './ip-clicking-report/ip-clicking-report.component';

import {NgxPaginationModule} from 'ngx-pagination';

import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

import { IpRangesClickingReportComponent } from './ip-ranges-clicking-report/ip-ranges-clicking-report.component';
import { UserStatisticComponent } from './user-statistic/user-statistic.component';
import { UuidHistoryComponent } from './uuid-history/uuid-history.component';
import { UserStatisticDetailComponent } from './user-statistic-detail/user-statistic-detail.component';
import { OverviewReportComponent } from './overview-report/overview-report.component';


@NgModule({
  declarations: [SpamClickReportComponent, IpDetailComponent, BlockedIpListComponent, IpClickingReportComponent, IpRangesClickingReportComponent, UserStatisticComponent, UuidHistoryComponent, UserStatisticDetailComponent, OverviewReportComponent],
  imports: [

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatTooltipModule,
    MatBadgeModule,
    MatRadioModule,
    MatDatepickerModule,
    MatPaginatorModule,
    MatDividerModule,
    MatTabsModule,
    MatTreeModule,
    MatProgressBarModule,
    MatMenuModule,
    MatExpansionModule,
    MatSelectModule,

    CheckboxGroupModule,
    ReactiveFormsModule,
    InputTextModule,
    InputTextareaModule,
    SelectTextModule,

    NgxChartsModule,
    FuseWidgetModule,
    ChartsModule,
    NgxDaterangepickerMd,
    NgxPaginationModule,
    NgxMatSelectSearchModule,

    FuseSharedModule,

    ReportsRoutingModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useValue: getVietnamesePaginatorIntl() }
  ]
})
export class ReportsModule { }
