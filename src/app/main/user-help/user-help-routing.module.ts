import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserHelpComponent } from './user-help.component';

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        pathMatch: 'full',
        component: UserHelpComponent
      }
    ])
  ],
  exports: [RouterModule]
})
export class UserHelpRoutingModule { }
