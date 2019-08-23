import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UpdateUserInfoComponent } from './update-user-info/update-user-info.component';
import { ActionHistoryComponent } from './action-history/action-history.component';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      pathMatch: 'full',
      component: UpdateUserInfoComponent
    },
    {
      path: 'thong-tin-ca-nhan',
      component: UpdateUserInfoComponent
    },
    {
      path: 'lich-su-thao-tac',
      component: ActionHistoryComponent
    }
  ])
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
