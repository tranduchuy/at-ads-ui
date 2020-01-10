import { NgModule } from '@angular/core';
import { VisitorToolsRoutingModule } from './visitor-tools-routing.module';
import { SendInfoComponent } from './send-info/send-info.component';
import { MatIconModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatTabsModule, MatButtonModule, MatDividerModule, MatGridListModule, MatInputModule, MatSlideToggleModule, MatRadioModule, MatTooltipModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { ColorCircleModule } from 'ngx-color/circle';

@NgModule({
  declarations: [
    SendInfoComponent
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

    FuseSharedModule,

    VisitorToolsRoutingModule
  ]
})
export class VisitorToolsModule { }
