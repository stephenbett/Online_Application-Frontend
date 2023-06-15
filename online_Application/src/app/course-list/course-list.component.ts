import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { MatDialog } from '@angular/material/dialog';
import { ApplicantFormComponent } from '../applicant-form/applicant-form.component';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  
  courses: any=[];
  applicant_form = false;

  constructor(private courseService: DataService,
              private dialog: MatDialog) { }

  applyClick(): void {
    this.dialog.open(ApplicantFormComponent, {
      width: '500px',
      disableClose: true
      });
  }
  ngOnInit(): void {
    this.refreshCourseList();
  }
  // applyClick(){
  //   this.applicant_form
  // }

  refreshCourseList(){
    this.courseService.getCourses().subscribe(data=>{this.courses=data});
  }
}


