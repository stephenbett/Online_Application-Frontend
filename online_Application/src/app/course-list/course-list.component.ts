import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  
  courses: any=[];
  applicant_form = false;

  applicant_formComponent(): void {
    this.applicant_form = !this.applicant_form;
  }

  constructor(private courseService: DataService) { }


  ngOnInit(): void {
    this.refreshCourseList();
  }
  applyClick(){
    this.courseService.addApplicant(eval).subscribe(data=>{this.courses=data});
  }
  refreshCourseList(){
    this.courseService.getCourses().subscribe(data=>{this.courses=data});
  }
}


