import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskInfoComponent } from './task-info/task-info.component';
import { DriverInfoComponent } from './driver-info/driver-info.component';
import { TrackStatusComponent } from './track-status/track-status.component';

const routes: Routes = [
  { path: 'task-info', component: TaskInfoComponent},
  { path: 'driver-info', component: DriverInfoComponent},
  { path: 'track-status', component: TrackStatusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
