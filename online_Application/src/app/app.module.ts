import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { DataService } from './data.service';
import { CourseListComponent } from './course-list/course-list.component';
import {  HttpClientModule } from '@angular/common/http';
import { ApplicantFormComponent } from './applicant-form/applicant-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    ApplicationComponent,
    ApplicantFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
