import { Component } from '@angular/core';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

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
