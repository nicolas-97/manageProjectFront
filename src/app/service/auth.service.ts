import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.url+'auth';

  constructor(private http: HttpClient) {
  }

  public login(data): Observable<any>{
    return this.http.post(this.url+'/login',data)
  }

  public register(data){
    return this.http.post(this.url+'/signup',data);
  }

  public logaut(){
    return this.http.get(this.url+'logout');
  }
}
