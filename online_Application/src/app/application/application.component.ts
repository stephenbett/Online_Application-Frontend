import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { UpdateComponent } from '../update/update.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements  OnInit {

  applicants:any= [];

  constructor(private applicantservice : DataService,
              private dialog: MatDialog )
  {}
  ngOnInit(): void {
    this.refreshAppliantList()
  }
  updateClick(): void{
    this.dialog.open(UpdateComponent, {
      width: '500px',
      disableClose: true
      });
  }  

  deleteClick(item:any){
    if(confirm("Are you sure you want to delete the applicant??")){

      this.applicantservice.deleteApplicant(item.key).subscribe(data=>{alert(data.toString());
      
        this.refreshAppliantList()
      })
    }
  }

  refreshAppliantList(){
    this.applicantservice.getApplicants().subscribe(data=>{this.applicants=data});
    }
    
  }


