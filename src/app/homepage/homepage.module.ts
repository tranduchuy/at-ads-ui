import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule, MatTableModule, MatDividerModule, MatTooltipModule } from '@angular/material';
import { HomepageComponent } from './homepage.component';
import { ScrollEventModule } from 'ngx-scroll-event';
import { AuthGuardService } from 'app/shared/services/guard/auth-guard.service';

const routes = [
  {
    path: 'gioi-thieu',
    component: HomepageComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatIconModule,
    MatButtonModule,
    MatTableModule,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    ScrollEventModule,

    FuseSharedModule
  ]
})
export class HomepageModule { }

