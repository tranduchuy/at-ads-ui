import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { MatStepperModule, MatIconModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,

    MatStepperModule,
    MatIconModule,
    RouterModule
  ],
  exports: [
    NotificationComponent
  ]
})
export class NotificationModule { }
