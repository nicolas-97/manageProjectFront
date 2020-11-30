import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  url = environment.url+'company';
  constructor(private http: HttpClient) { }

  allCompanies(): Observable<any>{
    return this.http.get(this.url);
  }
}
