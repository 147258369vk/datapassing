import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Userdata } from '../shared/userdata.model';
import { UserdataService } from '../shared/userdata.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {



  constructor(private activatedroute:ActivatedRoute,
    public userservice:UserdataService) { }

  id!:number
  prevData!:Userdata;
  @ViewChild('upateform', { static: false })
  newForm!: NgForm;






  ngOnInit(){
    this.activatedroute.queryParams.subscribe(params=>{
      this.id=params['id']
    });

    setTimeout(()=>{
      this.prevData=this.userservice.selectedUser(this.id);
      this.newForm.form.patchValue({
        username:this.prevData.username,
        email:this.prevData.email,
        location:this.prevData.location,
        profile:this.prevData.profile
      })


    }, )



  }




}

