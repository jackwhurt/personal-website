import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription, takeUntil } from 'rxjs';
import { CvSection } from 'src/app/interfaces/cv';

@Injectable({
  providedIn: 'root'
})
export class AssetsService {
  private bucketUrl: string = 'https://s3.eu-west-2.amazonaws.com/jackwhurt.com.assets/';
  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  downloadCV(): void {
    const fileName = 'JACK-HURT-SOFTWARE-ENGINEER-CV.pdf';

    fetch(this.bucketUrl + fileName)
      .then(response => response.blob())
      .then(blob => {
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(link.href);
      });
  }

  getCvContent(): Observable<CvSection[]> {
    return this.http.get<CvSection[]>(this.bucketUrl + 'cv-content.json').pipe(takeUntil(this.destroy$));
  }
}