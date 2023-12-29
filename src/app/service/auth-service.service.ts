import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {
  
  constructor() { }

  authenticate(userName:string,password:string) {
    if(userName==='naren' && password === 'naren') {
      sessionStorage.setItem("authenticatedUser",userName);
      return true;
    } else {
      return false;
    }
  }

  isUserLoggedIn() {
    return !(sessionStorage.getItem("authenticatedUser") === null);
  }

  performLogout() {
    sessionStorage.removeItem("authenticatedUser");
  }
}
