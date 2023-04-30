import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CalendarEvent } from 'angular-calendar';


@Injectable({
  providedIn: 'root'
})
export class CalendarEventService implements OnDestroy {
  private API_ENDPOINT: string = 'https://wxgfzl8mp5.execute-api.eu-west-2.amazonaws.com/Beta/';
  private destroy$ = new Subject<void>();

  constructor(private http: HttpClient) { }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  getCalendarEventsByMonth(month: string): Observable<CalendarEvent[]> {
    return this.http.get<CalendarEvent[]>(this.API_ENDPOINT + 'calendarEventByMonth/' + month).pipe(takeUntil(this.destroy$));
  }
}
