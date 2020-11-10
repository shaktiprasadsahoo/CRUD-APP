import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http'
import { EmployeeServiceService } from './employee-service.service';

@Component({
  selector: 'app-root',
  template: `
  <h3 style="text-align:center;" class="text">Angular CRUD</h3>
  <div class="emp-form">
  <div class="row">
    <div class="col-md-6 form-group">
      <input placeholder="First Name"  class="form-control" [(ngModel)]="firstname" i18n="@@a">
    </div>
    <div class="col-md-6 form-group">
      <input placeholder="Last Name" class="form-control" [(ngModel)]="lastname" i18n="@@b">
    </div>
  </div>
  <div class="row">
    <div class="col-md-12 form-group">
      <input placeholder="Designation" class="form-control" [(ngModel)]="designation" i18n="@@c">
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 form-group">
      <input placeholder="Contact" class="form-control" [(ngModel)]="contact" i18n="@@d">
    </div>
    <div class="col-md-6 form-group">
      <input placeholder="Address" class="form-control" [(ngModel)]="address" i18n="@@e">
    </div>
  </div>
  <div class="row">
    <div class="col-md-8">
      <button class="btn btn-success btn-lg btn-block" (click)="callServer()" i18n="@@f" >
        <i class="fa fa-save"></i>
        SUBMIT
      </button>
    </div>
    <div class="col-md-4">
      <button class="btn btn-primary btn-lg btn-block" i18n="@@g">  
        <i class="fa fa-retweet"></i>
        CLEAR
      </button>
    </div>
  </div>
</div>
<router-outlet></router-outlet>
<app-employeelist></app-employeelist>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'CRUD';
firstname:any;
lastname:any;
designation:any;
contact:any;
address:any;
  array: any[];

constructor(private http:HttpClient,
  private product:EmployeeServiceService
 ){

}
  ngOnInit() {
   
  }
 


 
callServer() {​​​​​​​​
const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
 
this.http.post('http://localhost:3000/api/employee', {​​​​​​​​firstname:this.firstname,lastname:this.lastname,designation:this.designation,contact:this.contact,address:this.address}​​​​​​​​, {​​​​​​​​
headers:headers
    }​​​​​​​​)
    .subscribe(data=> {​​​​​​​​
console.log(data);
this.ngOnInit();
this.product.value.next(true);

 
    }​​​​​​​​);

  }​​​​​​​​

}

