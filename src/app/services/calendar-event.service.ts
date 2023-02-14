import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CalendarEvent } from 'angular-calendar';


@Injectable({
  providedIn: 'root'
})
export class CalendarEventService {
  private API_ENDPOINT: string = 'https://wxgfzl8mp5.execute-api.eu-west-2.amazonaws.com/Beta/';

  constructor(private http: HttpClient) { }

  getCalendarEventsByMonth(month: string): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(this.API_ENDPOINT + 'calendarEventByMonth/' + month);
  }
}
