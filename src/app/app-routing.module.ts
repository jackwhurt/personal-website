import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymTrackerComponent } from './components/gym-tracker/gym-tracker.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'gym', component: GymTrackerComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' } // TODO: Redirect to 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
