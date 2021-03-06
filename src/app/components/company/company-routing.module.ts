import { NgModule } from '@angular/core';
import { Routes, RouterModule, NoPreloading } from '@angular/router';
import {CompanyComponent} from './company/company.component';

const routes: Routes = [
  {
    path: '',
    component: CompanyComponent
  },
  {
    path: 'project/:id',
    loadChildren: () => import('./project/project.module').then(m => m.ProjectModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

