import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  //store username in localstorage


  setuser(username:string)
  {
    localStorage.setItem('user',username);
  }

  getuser()
  {
    return localStorage.getItem('user');
  }

  removeUser()
  {
    localStorage.removeItem('user');
  }

  //check user stored in localstorage or not

  isLoggedIn()
  {
    if(this.getuser()==null)
    {
      return false;
    }
    else
    {
      return true;
    }
  }





//   any server languages used ->
//   session : store user information in server side
//   cookies : store user information in client side(browser)

//  in javascript
//  localStorage : destroy when user deleted the record
//  sessionStorage : it destory values after closing window or browser


}
