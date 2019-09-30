import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestCashBackComponent } from './request-cash-back.component';
import { RequestCashBackRoutingModule } from './request-cash-back-routing.module';
import { MatTooltipModule } from '@angular/material';

@NgModule({
  declarations: [
    RequestCashBackComponent
  ],
  imports: [
    CommonModule,
    RequestCashBackRoutingModule,
    MatTooltipModule
  ]
})
export class RequestCashBackModule { }
