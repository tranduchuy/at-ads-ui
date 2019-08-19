import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AuthGuardService } from '../../shared/services/guard/auth-guard.service';
import { LogoutComponent } from './logout.component';

const routes = [
  {
    path: 'auth/logout',
    component: LogoutComponent
  }
];

@NgModule({
  declarations: [
    LogoutComponent
  ],
  imports: [
    RouterModule.forChild(routes),
  ]
})
export class LogoutModule { }

