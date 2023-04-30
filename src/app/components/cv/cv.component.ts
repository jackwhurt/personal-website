import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CvSection } from 'src/app/interfaces/cv';
import { AssetsService } from 'src/app/services/assets-service/assets.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  cvSections: CvSection[] = []

  constructor(private assetsService: AssetsService) {}

  ngOnInit(): void {
    this.assetsService.getCvContent().subscribe({
          next: (data: CvSection[]) => {
            this.cvSections = data;
          },
          error: (error: any) => {
            console.error('Error fetching JSON from S3:', error);
          }
      });
  }

  downloadFile(): void {
    this.assetsService.downloadCV();
  }
}
