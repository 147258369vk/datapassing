import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Userdata } from './userdata.model';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  updatedData=new Subject<Userdata[]>();

private userDetails:Userdata[]=[
  new Userdata("karan","karan@gmail.com","chandigarh","developer")
]


  constructor() { }




  addnewUser(user:Userdata)
  {
    this.userDetails.push(user);
    this.updatedData.next(this.userDetails.slice());
  }

  displayUsers()
  {
    return this.userDetails.slice();
  }
}
