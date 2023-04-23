import { Component, Input } from '@angular/core';

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
}
