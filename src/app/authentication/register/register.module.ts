import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { FuseSharedModule } from '@fuse/shared.module';

import { RegisterComponent } from 'app/authentication/register/register.component';
import { AuthGuardService } from '../../shared/services/guard/auth-guard.service';

const routes = [
  {
    path: 'auth/register',
    component: RegisterComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [
    RouterModule.forChild(routes),

    MatDialogModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,

    FuseSharedModule
  ]
})
export class RegisterModule {
}
