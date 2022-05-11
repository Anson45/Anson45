import { Component, OnInit,Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service'
import { ShowDepComponent } from '../show-dep/show-dep.component';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.css']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() 
  dep:any; //adding
  DepartmentID: String | undefined;
  DepartmentName: String | undefined;

  ngOnInit(): void {
    this.DepartmentID=this.dep.DepartmentID
    this.DepartmentName=this.DepartmentName
  }

  addDepartment(){
    var val = { DepartmentID : this.DepartmentID,
                DepartmentName :this.DepartmentName}
      this.service.addDepartment(val).subscribe(res=>{
        alert(res.toString());
      });
  }

  updateDepartment(){
    var val = { DepartmentID : this.DepartmentID,
                DepartmentName :this.DepartmentName}
      this.service.updateDepartment(val).subscribe(res=>{
        alert(res.toString());
      });
  }


}
