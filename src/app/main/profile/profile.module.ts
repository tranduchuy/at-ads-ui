import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateUserInfoComponent } from './update-user-info/update-user-info.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { MatButtonModule, MatGridListModule, MatIconModule, MatFormFieldModule, MatDividerModule, MatCardModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { FuseSharedModule } from '../../../@fuse/shared.module';
import { InputTextModule } from '../../shared/components/input-text/input-text.module';
import { ProfileService } from './profile.service';
import { InputNumberModule } from 'app/shared/components/input-number/input-number.module';
import { ActionHistoryComponent } from './action-history/action-history.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [UpdateUserInfoComponent, ActionHistoryComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatGridListModule,
    FuseSharedModule,
    InputTextModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatDividerModule,
    InputNumberModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,

    NgxPaginationModule,
  ],
  providers: [
    ProfileService
  ]
})
export class ProfileModule { }
