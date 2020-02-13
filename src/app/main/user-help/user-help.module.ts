import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHelpRoutingModule } from './user-help-routing.module';
import { UserHelpComponent } from './user-help.component';

@NgModule({
  declarations: [
    UserHelpComponent
  ],
  imports: [
    CommonModule,
    UserHelpRoutingModule
  ]
})
export class UserHelpModule { }
