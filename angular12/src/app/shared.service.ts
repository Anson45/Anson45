import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
//import { Component } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APiurl = 'http://127.0.0.1:8000/Employee/';
  readonly Photourl = 'http://127.0.0.1:8000/Employee/SafeProfile/'

  constructor(private http:HttpClient) { }


  getDepList():Observable<any[]>{    
   // let value =  this.http.get<any[]>(this.APiurl +'Departmentviews/');
   // console.log('value is................ '+ value)
    return this.http.get<any[]>(this.APiurl +'Departmentviews/');
  }
  
  addDepartment(val:any){
    return this.http.post(this.APiurl +'Departmentviews/',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.APiurl +'Departmentviews/',val);
  }

  DeleteDepartment(val:any){
    return this.http.delete(this.APiurl +'Departmentviews/',val);
  }

  getEmployee():Observable<any[]>{
    return this.http.get<any[]>(this.APiurl +'/Employee/Employeviews/');
  }
  
  addEmployee(val:any){
    return this.http.post(this.APiurl +'/Employee/Employeviews/',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.APiurl +'/Employee/Employeviews/',val);
  }

  DeleteEmployee(val:any){
    return this.http.delete(this.APiurl +'/Employee/Employeviews/',val);
  }

  
  updatePhoto(val:any){

    return this.http.post(this.APiurl,'/Employee/SafeProfile/',val)
  }


}
