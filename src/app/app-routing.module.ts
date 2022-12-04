import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskInfoComponent } from './task-info/task-info.component';
import { DriverInfoComponent } from './driver-info/driver-info.component';

const routes: Routes = [
  { path: 'task-info', component: TaskInfoComponent},
  { path: 'driver-info', component: DriverInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
