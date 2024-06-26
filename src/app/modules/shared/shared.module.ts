import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

//componentes de AM
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
  ]
})
export class SharedModule { }
