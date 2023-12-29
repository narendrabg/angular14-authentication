import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../service/auth-service.service';
import { BasicAuthServiceService } from '../service/basic-auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName ='';
  password='';
  validationMessage ='Invalid credentials';
  invalidCredentials = false;
  constructor(private router:Router,
    private authService: BasicAuthServiceService) { }

  ngOnInit(): void {
  }

  handleLogin() {
    if(this.authService.executeAuthenticationService(this.userName,this.password)) {
    this.router.navigate(['welcome',this.userName]);
    this.invalidCredentials=false;
    }
    else {
      this.invalidCredentials = true;
    }
  }

  handleBasicAuthLogin() {
    this.authService.executeAuthenticationService(this.userName,this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome',this.userName])
        this.invalidCredentials=false;
      },error => {
        console.error(error);
        this.invalidCredentials=true;
      }
    )
  }
  handleJWTAuthLogin() {
    this.authService.executeJWTAuthenticationService(this.userName,this.password).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['welcome',this.userName])
        this.invalidCredentials=false;
      },error => {
        console.error(error);
        this.invalidCredentials=true;
      }
    )
  }
  

}
