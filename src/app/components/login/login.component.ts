import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/service/auth.service';
import { first } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private _builder: FormBuilder, private _authService:AuthService, private _route:Router) {
    this.loginForm = this._builder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
      remember_me: [true]
    });
  }

  async login(values){
    await this._authService.login(values).pipe(first()).subscribe((res:any) =>{
      this._route.navigate(['company',res.user.company_id]);
    },(error: any)=>{
      alert('Error iniciando sesion')
    })
  }

}
