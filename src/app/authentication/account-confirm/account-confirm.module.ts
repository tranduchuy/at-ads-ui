import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { FuseSharedModule } from '@fuse/shared.module';

import { AuthGuardService } from '../../shared/services/guard/auth-guard.service';
import { AccountConfirmComponent } from './account-confirm.component';
import { MatButtonModule } from '@angular/material';

const routes = [
    {
        path     : 'account-confirm/:token',
        component: AccountConfirmComponent,
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    declarations: [
        AccountConfirmComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,
        MatButtonModule,

        FuseSharedModule
    ]
})
export class AccountConfirmModule { }

