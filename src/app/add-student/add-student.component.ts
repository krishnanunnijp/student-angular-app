import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
  constructor(private api:ApiService){}
  name=""
  admNo=""
  rollNo=""
  college=""
  studententer=()=>{
    let data:any={
      "name":this.name,
      "college":this.college,
      "rollNo":this.rollNo,
      "admNo":this.admNo
    }
    this.api.addStudent(data).subscribe(
      (generated)=>{
        console.log(generated)
      }
    )

  }

}
