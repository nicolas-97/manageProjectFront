import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CompanyService} from 'src/app/service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  company=[];
  idCompany: any;
  constructor(private _companyService:CompanyService, private _paramas: ActivatedRoute) { }

  ngOnInit() {
    this.idCompany = this._paramas.snapshot.params.id
    this.getInfoCompany();
  }

  getInfoCompany(){
    this._companyService.getCompany(this.idCompany).subscribe(res=>{
      this.company=res;
      console.log()
    })
  }

}
