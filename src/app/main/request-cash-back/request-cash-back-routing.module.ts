import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RequestCashBackComponent } from './request-cash-back.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: RequestCashBackComponent
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class RequestCashBackRoutingModule { }
