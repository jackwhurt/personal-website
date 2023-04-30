import { Component, Input, OnChanges } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-podium',
  templateUrl: './podium.component.html',
  styleUrls: ['./podium.component.css']
})
export class PodiumComponent implements OnChanges {
  @Input() calendarEvents?: CalendarEvent[];
  count: { [name: string]: number } = {};
  first: { name: string, count: number } = { name: '', count: 0 };
  second: { name: string, count: number } = { name: '', count: 0 };
  third: { name: string, count: number } = { name: '', count: 0 };


  ngOnChanges() {
    this.init();
    this.calendarEvents?.forEach((event) => {
      this.count[event.title] = 0;
    })
    this.calendarEvents?.forEach((event) => {
      this.count[event.title] = this.count[event.title] + 1;
    });
    const sortableArray = Object.entries(this.count);
    const sortedArray = sortableArray.sort(([, a], [, b]) => a - b);
    this.first.name = sortedArray.pop()?.[0] || '';
    this.second.name = sortedArray.pop()?.[0] || '';
    this.third.name = sortedArray.pop()?.[0] || '';
  }

  init(): void {
    this.count = { };
    this.first = { name: '', count: 0 };
    this.second = { name: '', count: 0 };
    this.third = { name: '', count: 0 };
  }
}
