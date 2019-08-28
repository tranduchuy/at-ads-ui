import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { FuseSharedModule } from '@fuse/shared.module';

import { MatButtonModule, MatTableModule, MatDividerModule, MatTooltipModule } from '@angular/material';
import { HomepageComponent } from './homepage.component';

const routes = [
  {
    path: 'gioi-thieu',
    component: HomepageComponent,
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

    FuseSharedModule
  ]
})
export class HomepageModule { }

