import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private _builder: FormBuilder, private _authService:AuthService) {
    this.loginForm = this._builder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
      remember_me: [true]
    });
  }

  login(values){
    this._authService.login(values).subscribe(res =>{

    })
  }

}
