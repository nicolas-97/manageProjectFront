import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServicesService implements HttpInterceptor{

  constructor() { }
  intercept(req: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    if(localStorage.getItem('TOKEN_TYPE') && localStorage.getItem('ACCESS_TOKEN')){

      let token_type = localStorage.getItem('TOKEN_TYPE').toString();
      let token = localStorage.getItem('ACCESS_TOKEN').toString();

      const headers = new HttpHeaders({
        Authorization : token_type+' '+token
      })
      const reqClone = req.clone({
        headers
      });

      return next.handle(reqClone);
    }

    return next.handle(req);
  }
}
