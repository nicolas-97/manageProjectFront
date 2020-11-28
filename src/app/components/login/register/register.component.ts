import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {AuthService} from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  signUpForm: FormGroup;

  constructor(private _builder: FormBuilder, private _authService:AuthService, private _router:Router) {
    this.signUpForm = this._builder.group({
      name: ['',Validators.required],
      email: ['', Validators.compose([Validators.email, Validators.required])],
      password: ['', Validators.compose([Validators.minLength(8),Validators.required])],
    });
  }

  signUp(values){
    console.log(values);
  }

  goBack(){
    this._router.navigate(['login'])
  }
}
