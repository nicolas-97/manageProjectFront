import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';
import {JwtResponse} from '../models/auth';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url+'auth';

  constructor(private http: HttpClient) {
  }

  public login(data): Observable<JwtResponse>{
    return this.http.post(this.url+'/login',data)
    .pipe(tap(
      (res: JwtResponse) => {
        if(res){
          localStorage.setItem("ACCESS_TOKEN", res.access_token);
          localStorage.setItem("EXPIRES_AT", res.expires_at.toString());
          localStorage.setItem("TOKEN_TYPE", res.token_type);
        }
      }
    ));
  }

  public register(data){
    return this.http.post(this.url+'/signup',data);
  }

  public logout(){
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_AT");
    localStorage.removeItem("TOKEN_TYPE");
    return this.http.get(this.url+'logout'); // enviar cabecera
  }
}
