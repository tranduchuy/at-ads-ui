import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { FuseSharedModule } from '@fuse/shared.module';

import { AuthGuardService } from '../../shared/services/guard/auth-guard.service';
import { MatButtonModule } from '@angular/material';
import { ResendEmailComponent } from './resend-email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'app/shared/components/input-text/input-text.module';

const routes = [
  {
    path: 'resend-email',
    component: ResendEmailComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  declarations: [
    ResendEmailComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    InputTextModule,

    FuseSharedModule
  ]
})
export class ResendEmailModule { }

