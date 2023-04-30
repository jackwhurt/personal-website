import { Component, ChangeDetectionStrategy, ViewChild, TemplateRef, OnInit, Output, EventEmitter } from '@angular/core';
import { isSameDay, isSameMonth } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { CalendarEventService } from 'src/app/services/calender-event/calendar-event.service';

@Component({
  selector: 'app-calendar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any> | undefined;
  @Output() eventsOutput = new EventEmitter<CalendarEvent[]>; 

  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];
  refresh = new Subject<void>();

  modalData: {
    action: string;
    event: CalendarEvent;
  } | undefined;

  activeDayIsOpen: boolean = true;

  constructor(private calendarEventService: CalendarEventService) { }

  ngOnInit() {
    this.loadEvents(new Date());
  }

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = date;
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd,
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map((iEvent) => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd,
        };
      }
      return iEvent;
    });
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;

    this.loadEvents(this.viewDate);
  }

  private loadEvents(date: Date) {
    this.events = [];

    const year: string = date.getFullYear().toString();
    let month: string = String(date.getMonth() + 1).padStart(2, '0')

    this.calendarEventService.getCalendarEventsByMonth(year + '-' + month).subscribe((eventsToSet) => {
      if (eventsToSet) {
        eventsToSet.map((entry) => entry.start = new Date(entry.start));
        this.events = this.events.concat(eventsToSet);
        this.refresh.next();
      }
      this.eventsOutput.emit(eventsToSet);
    });

    let monthBefore: string = String(date.getMonth()).padStart(2, '0');
    if(monthBefore === '00') {
      monthBefore = '12';
    }
    this.calendarEventService.getCalendarEventsByMonth(year + '-' + monthBefore).subscribe((eventsToSet) => {
      if (eventsToSet) {
        eventsToSet.map((entry) => entry.start = new Date(entry.start));
        this.events = this.events.concat(eventsToSet);
        this.refresh.next();
      }
    });

    let monthAfter: string = String(date.getMonth() + 2).padStart(2, '0');
    if(monthAfter === '13') {
      monthAfter = '01';
    }
    this.calendarEventService.getCalendarEventsByMonth(year + '-' + monthAfter).subscribe((eventsToSet) => {
      if (eventsToSet) {
        eventsToSet.map((entry) => entry.start = new Date(entry.start));
        this.events = this.events.concat(eventsToSet);
        this.refresh.next();
      }
    });
  }
}