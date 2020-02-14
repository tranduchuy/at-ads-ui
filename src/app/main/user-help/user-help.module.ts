import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHelpRoutingModule } from './user-help-routing.module';
import { UserHelpComponent } from './user-help.component';
import { MatButtonModule, MatFormFieldModule, MatIconModule, MatInputModule, MatSelectModule } from '@angular/material';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseSidebarModule } from '@fuse/components';

@NgModule({
  declarations: [
    UserHelpComponent
  ],
  imports: [
    CommonModule,
    UserHelpRoutingModule,

    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,

    FuseSharedModule,
    FuseSidebarModule
  ]
})
export class UserHelpModule { }
