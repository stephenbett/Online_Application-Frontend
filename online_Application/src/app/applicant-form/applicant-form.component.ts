import { Component, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  styleUrls: ['./applicant-form.component.css']
})
export class ApplicantFormComponent {

  constructor() {}
  
public data: any
  get name(): string {
    return this.data.name;
  }

  get email(): string {
    return this.data.email;
  }

  get courseName(): string {
    return this.data.courseName;
  }

  apply(): void {
    // Add your apply logic here
  }



}
