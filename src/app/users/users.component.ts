import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Userdata } from '../shared/userdata.model';
import { UserdataService } from '../shared/userdata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public udservice:UserdataService) { }


  users!:Userdata[];
  subscription!:Subscription;
  ngOnInit(){

    this.users = this.udservice.displayUsers();
console.log(this.users)
    this.subscription=this.udservice.updatedData.subscribe((user:Userdata[])=>{this.users=user})
    console.log(this.subscription);
  }

  adduser(form:NgForm)
  {
    // console.log(form.value);
    const users=new Userdata(form.value.username,form.value.email,form.value.location,form.value.profile);

    this.udservice.addnewUser(users);
    alert("data inserted successfully");

  }

}
