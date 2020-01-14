import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SendInfoComponent } from './send-info/send-info.component';
import { FakeCustomerComponent } from './fake-customer/fake-customer.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'gui-thong-tin-tu-van',
        pathMatch: 'full',
        component: SendInfoComponent
      },
      {
        path: 'gia-khach-mua-hang',
        pathMatch: 'full',
        component: FakeCustomerComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class VisitorToolsRoutingModule { }
