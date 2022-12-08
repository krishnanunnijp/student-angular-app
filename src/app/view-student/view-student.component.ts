import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent {
  data:any=[]
  constructor(private api:ApiService){
    this.api.fetchStudent().subscribe(
      (generated:any)=>{
        this.data=generated
      }
    )
  }

}
