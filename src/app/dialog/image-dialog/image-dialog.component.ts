import { Component, OnInit } from '@angular/core';

import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.scss']
})
export class ImageDialogComponent {

  public imgSrc: string;

  constructor(
    public dialogRef: MatDialogRef<ImageDialogComponent>
  ) {}
}

