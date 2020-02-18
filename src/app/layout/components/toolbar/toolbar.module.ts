import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';

import { FuseSearchBarModule, FuseShortcutsModule } from '@fuse/components';
import { FuseSharedModule } from '@fuse/shared.module';

import { ToolbarComponent } from 'app/layout/components/toolbar/toolbar.component';
import { MatSelectModule, MatFormFieldModule, MatInputModule, MatTooltipModule } from '@angular/material';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';

@NgModule({
    declarations: [
        ToolbarComponent
    ],
    imports     : [
        RouterModule,
        MatButtonModule,
        MatIconModule,
        MatMenuModule,
        MatToolbarModule,
        MatSelectModule,
        MatFormFieldModule,
        MatInputModule,
        MatTooltipModule,

        FuseSharedModule,
        FuseSearchBarModule,
        FuseShortcutsModule,

        NgxMatSelectSearchModule
    ],
    exports     : [
        ToolbarComponent
    ]
})
export class ToolbarModule
{
}
