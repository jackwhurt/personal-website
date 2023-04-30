import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CvComponent } from './cv.component';
import { CvItemComponent } from './cv-item/cv-item.component';
import { CvSectionComponent } from './cv-section/cv-section.component';
import { CvModalComponent } from './cv-modal/cv-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    CvComponent,
    CvItemComponent,
    CvSectionComponent,
    CvModalComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ]
})
export class CvModule { }