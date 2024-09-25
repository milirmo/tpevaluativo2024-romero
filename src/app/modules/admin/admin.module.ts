import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module'; //importamos archivo de rutas
import { AdminComponent } from './page/admin/admin.component'; //importamos vista
import { TableComponent } from './components/table/table.component'; //importamos componente

import { FormsModule, ReactiveFormsModule } from '@angular/forms'; //importamos paquetería para formularios y formularios reactivos

import { MatIconModule } from '@angular/material/icon'; //importamos modulo de íconos de AM


@NgModule({
  declarations: [
    AdminComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ],
  exports: [
    AdminComponent,
    TableComponent,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule
  ]
})
export class AdminModule { }

