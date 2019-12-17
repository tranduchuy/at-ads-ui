import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FuseSharedModule } from '@fuse/shared.module';
import { MatButtonModule, MatTableModule, MatDividerModule, MatTooltipModule } from '@angular/material';
import { HomepageComponent } from './homepage.component';
import { ScrollEventModule } from 'ngx-scroll-event';
import { AuthGuardService } from 'app/shared/services/guard/auth-guard.service';
import { LazyLoadImageModule, intersectionObserverPreset } from 'ng-lazyload-image';

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

    //Lazyload image module
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    }),

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

