import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css']
})
export class CvItemComponent {
  @Input() title: string = 'Title';
  @Input() duration: string = 'March 2020 - September 2021'
  @Input() description: string = 'Achieved XYZ'
}
