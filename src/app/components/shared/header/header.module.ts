import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import {MatToolbar, MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon'

@NgModule({
  imports: [
    MatToolbarModule,
    CommonModule,
    MatIconModule,
  ],
  declarations: [HeaderComponent]
})
export class HeaderModule { }
