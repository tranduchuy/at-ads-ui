import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';

import { FuseTranslationLoaderService } from '@fuse/services/translation-loader.service';
import { InfoDialogComponent } from '../../dialog/info-dialog/info-dialog.component';

import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.scss']
})
export class SampleComponent {
  /**
   * Constructor
   *
   * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
   * @param {MatDialog} _matDialog
   */
  constructor(
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private _matDialog: MatDialog
  ) {
    this._fuseTranslationLoaderService.loadTranslations(english, turkish);
  }

  openConfirmDialog(): void {
    this._matDialog.open(InfoDialogComponent);
  }
}
