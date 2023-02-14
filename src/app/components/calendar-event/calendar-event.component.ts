import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CalendarEvent } from 'angular-calendar';
import { startOfDay } from 'date-fns';
import { CalendarEventService } from 'src/app/services/calendar-event.service';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent {
  public createForm: FormGroup;

  public calendarEvents: Array<CalendarEvent> = [];

  constructor(private fb: FormBuilder, private calendarEventService: CalendarEventService) {
    this.createForm = this.fb.group({
      start: ['', Validators.required],
      end: ['', Validators.required],
      title: ['', Validators.required],
      color: ['', Validators.required],
      actions: ['', Validators.required],
      allDay: ['', Validators.required],
      resizable: ['', Validators.required],
      draggable: ['', Validators.required],
    });
  }
}
