import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthServiceService } from '../basic-auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class HttpBasicAuthService implements HttpInterceptor {

  constructor(private basicAuthService:BasicAuthServiceService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let userName = 'naren';
    // let password='naren';
    // let basicAuthHeaderString = 'Basic '+ window.btoa(userName+":"+password);
    let basicAuthHeaderString = this.basicAuthService.getAuthenticateToken();
    let user = this.basicAuthService.getAuthenticateUser();
    if (basicAuthHeaderString && user) {
      request = request.clone({
        setHeaders: {
          Authorization:basicAuthHeaderString
        }
      })
    }
    return next.handle(request);
  }
}
