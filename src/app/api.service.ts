import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  addStudent=(value:any)=>{
    return this.http.post("http://localhost:8080/add",value)
  }
  fetchStudent=()=>{
    return this.http.get("http://localhost:8080/view")
  }
  searchStudent=(value:any)=>{
    return this.http.post("http://localhost:8080/search",value)
  }
  deleteStudent=(value:any)=>{
    return this.http.post("http://localhost:8080/delete",value)
  }
}
