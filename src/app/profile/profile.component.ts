import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(
    public userservice:UserService
  ) { }

    user!:string
  ngOnInit() {

    this.user=JSON.stringify(this.userservice.getuser());
  }

}
