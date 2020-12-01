import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CompanyComponent} from './company/company.component';
import { CompanyRoutingModule } from './company-routing.module';
import {HeaderComponent} from '../shared/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    CompanyRoutingModule
  ],
  declarations: [CompanyComponent, HeaderComponent]
})
export class CompanyModule { }
