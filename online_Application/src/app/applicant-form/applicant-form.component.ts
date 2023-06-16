import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  styleUrls: ['./applicant-form.component.css']
})
export class ApplicantFormComponent {

  constructor(private http:HttpClient) {}

  formData = {
    FirstName: '',
    Surname:'',
    Age:'',
    Course_Name: ''
  };
  

  onapply() {
    var url = 'https://localhost:44395/api/applicant';

    this.http.post(url, this.formData).subscribe(
      (response) => {
        // Handle the response from the API
        console.log(response);
      },
      (error) => {
        // Handle any errors that occur during the request
        console.error(error);
      }
    );
  }



}
