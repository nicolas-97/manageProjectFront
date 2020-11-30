import {HttpResponse} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/service/auth.service';
import {CompanyService} from 'src/app/service/company.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signUpForm: FormGroup;
  companies = [];

  constructor(private _builder: FormBuilder, private _authService:AuthService, private _router:Router, private _companyService:CompanyService) {
    this.signUpForm = this._builder.group({
      name: ['',Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      company_id: ['Selecciona', Validators.required]
    });
  }

  ngOnInit(): void {
    this.allCompanies();
  }

  allCompanies(){
    this._companyService.allCompanies().subscribe(res=>{
      this.companies=res;
    })
  }

  signUp(values){
    this._authService.register(values).subscribe((res:any) =>{
      if(res.message!=null){
        this.goBack();
      }
    })
  }

  goBack(){
    this._router.navigate(['login'])
  }
}
