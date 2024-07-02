import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

//componentes de AM
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from 'src/app/app-routing.module';
import {MatMenuModule} from '@angular/material/menu'; //menu para productos
import {MatGridListModule} from '@angular/material/grid-list'; //gird para separar el footer



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
    AppRoutingModule,
    MatMenuModule,
    MatGridListModule,

  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    MatMenuModule,
    MatGridListModule,
  ]
})
export class SharedModule { }
