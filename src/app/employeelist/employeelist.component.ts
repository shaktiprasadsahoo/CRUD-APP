import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  array: any;
  value:boolean=false;
  getData:boolean;
  id:any;
 firstname:any;
 lastname:any;
 designation:any;
 contact:any;
 address:any;


  constructor(private http:HttpClient,
    private Emp:EmployeeServiceService) { }

  ngOnInit() {
    this.getData=false;
 localStorage.setItem('firstname',this.firstname);
 localStorage.setItem('designation',this.designation);
    this.editAllEmployee();
    this.Emp.value.subscribe(res=>{
      this.value=res;
      if(this.value==true){
        this.editAllEmployee();
      }
    })
  }
  editAllEmployee(){​​​​​​​​
    this.http.get<any>('http://localhost:3000/api/employee').subscribe(data=> {​​​​​​​​
    this.array = data.results;
    console.log(this.array);
        }​​​​​​​​)  
      }​​​​​​​​
    

delete(i){​​​​​​​​

this.http.delete("http://localhost:3000/api/employee/" +i ).subscribe(data=> {​​​​​​​​
console.log(data);
this.editAllEmployee();
this.ngOnInit();
    }​​​​​​​​);
 
   }
   putRequest(i​​​​​​​​){
    this.http.get<any>('http://localhost:3000/api/employee/'+i).subscribe(data=> {​​​​​​​​
    console.log(this.id=data.results[0].id);
   if(this.id==i){
     this.getData=true;
    
   }
  })
   
  }
 updatePost() {
    let endPoints =this.id;

    this.http.put('http://localhost:3000/api/employee/' + endPoints, {firstname:this.firstname,lastname:this.lastname,designation:this.designation}).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    
    });
  }
}
