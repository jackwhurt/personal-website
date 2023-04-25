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

  hash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return hash;
  }
}
