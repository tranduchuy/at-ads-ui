import { NgModule } from '@angular/core';
import { VisitorToolsRoutingModule } from './visitor-tools-routing.module';
import { SendInfoComponent } from './send-info/send-info.component';
import { MatIconModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatTabsModule, MatButtonModule, MatDividerModule, MatGridListModule, MatInputModule, MatSlideToggleModule, MatRadioModule, MatTooltipModule, MatExpansionModule, MatSliderModule, MatCheckboxModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ColorCircleModule } from 'ngx-color/circle';
import { FakeCustomerComponent } from './fake-customer/fake-customer.component';
import { Ng5SliderModule } from 'ng5-slider';
import { EventWidgetComponent } from './event-widget/event-widget.component';

@NgModule({
  declarations: [
    SendInfoComponent,
    FakeCustomerComponent,
    EventWidgetComponent
  ],
  imports: [

    MatIconModule,
    MatTabsModule,
    MatButtonModule,
    MatDividerModule,
    MatGridListModule,
    MatInputModule,
    MatSlideToggleModule,

    ReactiveFormsModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    MatRadioModule,
    MatGridListModule,
    MatTooltipModule,
    MatExpansionModule,
    MatSliderModule,
    MatCheckboxModule,

    NgxMatSelectSearchModule,
    ColorCircleModule,

    Ng5SliderModule,

    FuseSharedModule,

    VisitorToolsRoutingModule
  ]
})
export class VisitorToolsModule { }
