import { Component } from '@angular/core';
import { CalendarEvent } from 'angular-calendar';

@Component({
  selector: 'app-gym-tracker',
  templateUrl: './gym-tracker.component.html',
  styleUrls: ['./gym-tracker.component.css']
})
export class GymTrackerComponent {
  calendarEvents?: CalendarEvent[];

  updateCalendarEvents(events: CalendarEvent[]) {
    this.calendarEvents = events;
  }
}
