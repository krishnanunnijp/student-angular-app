import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search-student',
  templateUrl: './search-student.component.html',
  styleUrls: ['./search-student.component.css']
})
export class SearchStudentComponent {
  constructor(private api:ApiService ,private router:Router){
    api.fetchStudent().subscribe(
      (generated:any)=>{
        this.data=generated
      }
    )
  }
  name=""

  data:any=[]
  
  searchE=()=>{
    let data1={
      "name":this.name
    }

    this.api.searchStudent(data1).subscribe(
      (generated:any)=>{
        if(generated.length!=0){
        console.log(generated)
        this.data=generated
        
      }
        else{
          alert("invalid")
          this.data=[]
        }

      }

    )

  }
  deleteP=(id:any)=>{
    let data:any={"id":id} 
    this.api.deleteStudent(data).subscribe(
      (generated:any)=>{
        console.log(generated)
        this.router.navigate(['/search'])
        window.location.reload()
        
      }
    )
  }
}
