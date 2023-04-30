import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GymTrackerComponent } from './gym-tracker.component';
import { CalendarComponent } from './calendar/calendar.component';
import { PodiumComponent } from './podium/podium.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    GymTrackerComponent,
    CalendarComponent,
    PodiumComponent
  ],
  imports: [
    CommonModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    HttpClientModule,
  ]
})
export class GymTrackerModule { }
