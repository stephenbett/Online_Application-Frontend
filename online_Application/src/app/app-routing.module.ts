import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { CourseListComponent } from './course-list/course-list.component';
import { ApplicantFormComponent } from './applicant-form/applicant-form.component';

const routes: Routes = [
  {path:'courseList',component:CourseListComponent},
  {path:'applicantList',component:ApplicationComponent},
  {path:'apply',component:ApplicantFormComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
