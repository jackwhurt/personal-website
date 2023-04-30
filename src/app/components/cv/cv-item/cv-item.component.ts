import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { CvItem } from 'src/app/interfaces/cv';
import { CvModalComponent } from '../cv-modal/cv-modal.component';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-cv-item',
  templateUrl: './cv-item.component.html',
  styleUrls: ['./cv-item.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({ height: '0px', overflow: 'hidden' })),
      state('expanded', style({ height: '*' })),
      transition('collapsed <=> expanded', [animate('300ms ease-in-out')]),
    ]),
    trigger('scrollIn', [
      state('void', style({ opacity: 0, transform: 'translateY(-100%)' })),
      transition('void => *', [animate('300ms ease-in-out')]),
    ]),
  ],
})
export class CvItemComponent implements OnInit {
  @Input() cvItem!: CvItem;
  @ViewChild('cvModal') cvModalComponent!: CvModalComponent;
  myTogglesExpand = new Map<number, boolean>();

  ngOnInit(): void {
    this.cvItem.bulletPoints?.forEach((bulletPoint) => {
      if (bulletPoint.dropdown) {
        const uniqueHash = this.hash(bulletPoint.title);
        this.myTogglesExpand.set(uniqueHash, false);
      }
    });
  }

  hash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0;
    }
    return hash;
  }

  toggleExpand(title: string) {
    const uniqueHash = this.hash(title);
    this.myTogglesExpand.set(uniqueHash, !this.myTogglesExpand.get(uniqueHash));
  }

  isExpanded(title: string) {
    return this.myTogglesExpand.get(this.hash(title));
  }
}
