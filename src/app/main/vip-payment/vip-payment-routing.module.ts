import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VipPaymentComponent } from './vip-payment.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: VipPaymentComponent
    }
  ])],
  exports: [RouterModule]
})
export class VipPaymentRoutingModule { }
