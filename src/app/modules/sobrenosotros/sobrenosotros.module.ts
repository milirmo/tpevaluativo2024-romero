import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobrenosotrosRoutingModule } from './sobrenosotros-routing.module';
import { SobrenosotrosComponent } from './page/sobrenosotros/sobrenosotros.component';
import { MatGridListModule } from '@angular/material/grid-list';


@NgModule({
  declarations: [
    SobrenosotrosComponent
  ],
  imports: [
    CommonModule,
    SobrenosotrosRoutingModule,
    MatGridListModule
  ],
  exports: [
    SobrenosotrosComponent,
    MatGridListModule
  ]
})
export class SobrenosotrosModule { }
