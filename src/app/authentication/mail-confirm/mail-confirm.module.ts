import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { FuseSharedModule } from '@fuse/shared.module';

import { MailConfirmComponent } from 'app/authentication/mail-confirm/mail-confirm.component';
import { AuthGuardService } from '../../shared/services/guard/auth-guard.service';

const routes = [
    {
        path     : 'auth/mail-confirm',
        component: MailConfirmComponent,
        canActivate: [AuthGuardService]
    }
];

@NgModule({
    declarations: [
        MailConfirmComponent
    ],
    imports     : [
        RouterModule.forChild(routes),

        MatIconModule,

        FuseSharedModule
    ]
})
export class MailConfirmModule
{
}
