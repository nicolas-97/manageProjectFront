import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public constructor(public route: Router){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  goToLogin(){
    this.route.navigate(['/login'])
  }

}
