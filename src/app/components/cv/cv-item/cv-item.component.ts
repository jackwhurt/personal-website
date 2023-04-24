import { Component, Input, ViewChild } from '@angular/core';
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
  @Input() bulletPoints?: string[];
  @Input() list?: string[];
  @Input() modal?: boolean;
  @ViewChild('cvModal') cvModalComponent!: CvModalComponent;
}
