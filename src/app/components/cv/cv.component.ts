import { Component } from '@angular/core';
import { CvSection } from 'src/app/interfaces/cv';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent {
  cvSections: CvSection[] = [
    {
      title: 'SectionTitle',
      cvItems: [{
        title: 'CvTitle',
        description: 'Description',
        location: 'Location',
        duration: 'Duration',
        bulletPoints: ['point1', 'point2']
      }]
    },
    {
      title: 'SectionTitle',
      cvItems: [{
        title: 'CvTitle',
        description: 'Description',
        location: 'Location',
        duration: 'Duration',
        bulletPoints: ['point1', 'point2']
      }]
    }
  ]
}
