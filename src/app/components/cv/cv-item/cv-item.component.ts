import { Component, Input, ViewChild } from '@angular/core';
import { Point } from 'src/app/interfaces/cv';
import { CvModalComponent } from '../cv-modal/cv-modal.component';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})
export class CvItemComponent {
  @Input() title?: string;
  @Input() location?: string;
  @Input() duration?: string;
  @Input() description?: string;
  @Input() bulletPoints?: Point[];
  @Input() list?: string[];
  @ViewChild('cvModal') cvModalComponent!: CvModalComponent;
}
