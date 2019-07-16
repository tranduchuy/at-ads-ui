import { ElementRef, Input } from '@angular/core';
import { BaseComponent } from './base.component';

export abstract class InputTextBaseComponent extends BaseComponent {
  @Input() icon = '';
}
