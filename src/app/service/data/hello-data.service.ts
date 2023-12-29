import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloDataService {

  constructor(private http:HttpClient ) { }

  helloWorld() {
    // let basicAuthHeaderString = this.createBasicAuthentationHeder();
    // let headers = new HttpHeaders({Authorization: basicAuthHeaderString})
    return this.http.get<helloWorldBean>(`http://localhost:8080/api/hello`);
  }

  helloWorldWithParam(name:string) {
    // let basicAuthHeaderString = this.createBasicAuthentationHeder();
    // let headers = new HttpHeaders({Authorization: basicAuthHeaderString})
    return this.http.get<helloWorldBean>(`http://localhost:8080/api/hello/${name}`);
  }
  // createBasicAuthentationHeder() {
  //   let userName = 'naren';
  //   let password='naren';
  //   let basicAuthHeaderString = 'Basic '+ window.btoa(userName+":"+password);
  //   return basicAuthHeaderString;
  // }
}

// 'Access-Control-Allow-Headers': 'Content-Type',
//     'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
//     'Access-Control-Allow-Origin': '*', 

export class helloWorldBean {
  constructor(public message:string) {

  }
}