import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskInfoComponent } from './task-info/task-info.component';
import { DriverInfoComponent } from './driver-info/driver-info.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskInfoComponent,
    DriverInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
