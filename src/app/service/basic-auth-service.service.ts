import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { API_URL } from '../app.component';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthServiceService {
  
  constructor(private http:HttpClient) { }
  
  executeAuthenticationService(userName:string,password:string) {
    let basicAuthHeaderString = 'Basic '+ window.btoa(userName+":"+password);
    let headers = new HttpHeaders({Authorization: basicAuthHeaderString})
    return this.http.get<AuthenticationBean>(`${API_URL}/basicauth`,{headers}).
    pipe(
      map(data => {
        sessionStorage.setItem(AUTHENTICATED_USER,userName);
        sessionStorage.setItem(TOKEN,basicAuthHeaderString);
        return data;
      })
    )
    ;
  }

  executeJWTAuthenticationService(email:string,password:string) {
    
    return this.http.post<any>(`${API_URL}/authenticate/signin`,{email,password}).
    pipe(
      map(data => {
        sessionStorage.setItem(AUTHENTICATED_USER,email);
        sessionStorage.setItem(TOKEN,`Bearer ${data.token}`);
        return data;
      })
    )
    ;
  }

  getAuthenticateUser() {
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticateToken() {
    if (this.getAuthenticateUser()) {
      return sessionStorage.getItem(TOKEN);
    }
    return null;
  }
  isUserLoggedIn() {
    return !(sessionStorage.getItem(AUTHENTICATED_USER) === null);
  }

  performLogout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean {
  constructor(public message:string) {}
}

export const AUTHENTICATED_USER = "authenticatedUser";
export const TOKEN = "token";