import { NgModule } from '@angular/core';
import { VisitorToolsRoutingModule } from './visitor-tools-routing.module';
import { SendInfoComponent } from './send-info/send-info.component';
import { MatIconModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatTabsModule, MatButtonModule, MatDividerModule, MatGridListModule, MatInputModule, MatSlideToggleModule, MatRadioModule, MatTooltipModule, MatExpansionModule, MatSliderModule, MatCheckboxModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ColorCircleModule } from 'ngx-color/circle';
import { FakeCustomerComponent } from './fake-customer/fake-customer.component';

import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    SendInfoComponent,
    FakeCustomerComponent
  ],
  imports: [

    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatSlideToggleModule,

    ColorCircleModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    NgxMatSelectSearchModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSliderModule,
    MatCheckboxModule,

    DragDropModule,

    FuseSharedModule,

    VisitorToolsRoutingModule
  ]
})
export class VisitorToolsModule { }
