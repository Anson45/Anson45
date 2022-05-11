// import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  

   constructor(private service:SharedService) { }

   Departmentlist:any = [];  
   ActivateAddEditDepComp:boolean = false;
   dep:any;
   ModalTitle!: string;



  ngOnInit(): void {
   
    this.refreshDepList();
  }

  addClick(){
    this.dep ={
      DepartmentID: 0,
      DepartmentName:''
    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;
  }
  editClick(item: any){
    this.dep=item
    this.ModalTitle="Edit Department"
    this.ActivateAddEditDepComp=true;
  }
  deleteClick(item: { DepartmentID: any; }){
    if(confirm("are you sure..?")){
      this.service.DeleteDepartment(item.DepartmentID).subscribe(data=>{
         alert(data.toString());
         this.refreshDepList();
      })
    }
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();

  }

  refreshDepList(){
    
    this.service.getDepList().subscribe(data=>{
      this.Departmentlist=data;
      console.log("dep-component works")
    });

  }

}
