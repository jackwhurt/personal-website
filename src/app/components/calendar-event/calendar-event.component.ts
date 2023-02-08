import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { startOfDay } from 'date-fns';
import { CalendarEvent } from '../../interfaces/calendar-event';

@Component({
  selector: 'app-calendar-event',
  templateUrl: './calendar-event.component.html',
  styleUrls: ['./calendar-event.component.css']
})
export class CalendarEventComponent {
  public createForm: FormGroup;

  public calendarEvents: Array<CalendarEvent> = [];

  constructor(private fb: FormBuilder) {
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

  public onCreate(calendarEvent: CalendarEvent) {
    
  }

  public onCreateLoad() {
    const calEvent1: CalendarEvent = {
      id: '',
      start: startOfDay(new Date()).toString(),
      title: 'Louis',
      colour: 'Blue',
      allDay: true,
      draggable: false,
    }
    this.onCreate(calEvent1);
  }
}
