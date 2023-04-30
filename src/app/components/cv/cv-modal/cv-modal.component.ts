import { Component, Input } from '@angular/core';
import { ModalContent } from 'src/app/interfaces/cv';

@Component({
  selector: 'app-cv-modal',
  templateUrl: './cv-modal.component.html',
  styleUrls: ['./cv-modal.component.css']
})
export class CvModalComponent {
  @Input() modalContent?: ModalContent;
  @Input() id!: number;
}
