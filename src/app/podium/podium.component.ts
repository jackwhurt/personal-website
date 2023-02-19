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
    this.calendarEvents?.forEach((event) => {
      this.count[event.title] = 0;
    })
    this.calendarEvents?.forEach((event) => {
      this.count[event.title] = this.count[event.title] + 1;
      if (this.count[event.title] >= this.first.count) {
        this.third.name = this.second.name
        this.third.count = this.second.count;
        this.second.name = this.first.name
        this.second.count = this.first.count;
        this.first.name = event.title;
        this.first.count = this.count[event.title];
      }
    });
  }
}
