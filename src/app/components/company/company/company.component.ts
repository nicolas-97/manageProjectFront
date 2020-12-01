import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ICompany} from 'src/app/models/company';
import {CompanyService} from 'src/app/service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  company:ICompany;
  idCompany: any;
  constructor(private _companyService:CompanyService, private _paramas: ActivatedRoute) { }

  ngOnInit() {
    this.idCompany = this._paramas.snapshot.params.id
    this.getInfoCompany();
  }

  getInfoCompany(){
    this._companyService.getCompany(this.idCompany).subscribe((res : ICompany)=>{
      this.company=res;
    })
  }

}
