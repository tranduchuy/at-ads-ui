import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateUserInfoComponent } from './update-user-info/update-user-info.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: UpdateUserInfoComponent
    }, {
      path: '/cap-nhat-thong-tin-ca-nhan',
      component: UpdateUserInfoComponent
    }
  ])
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
