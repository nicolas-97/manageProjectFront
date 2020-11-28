import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm: FormGroup;

  constructor(private _builder: FormBuilder) {
    this.loginForm = this._builder.group({
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.required],
      remember_me: [true]
    });
  }

  login(values){
    console.log(values)
  }

}
