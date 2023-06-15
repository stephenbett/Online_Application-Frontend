import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationComponent } from './application/application.component';
import { DataService } from './data.service';
import { CourseListComponent } from './course-list/course-list.component';
import {  HttpClientModule } from '@angular/common/http';
import { ApplicantFormComponent } from './applicant-form/applicant-form.component';
import { UploadComponent } from './upload/upload.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { UpdateComponent } from './update/update.component';



@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    ApplicationComponent,
    ApplicantFormComponent,
    UploadComponent,
    UpdateComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
