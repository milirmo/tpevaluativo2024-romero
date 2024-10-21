import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SobrenosotrosRoutingModule } from './sobrenosotros-routing.module';
import { SobrenosotrosComponent } from './page/sobrenosotros/sobrenosotros.component';


@NgModule({
  declarations: [
    SobrenosotrosComponent
  ],
  imports: [
    CommonModule,
    SobrenosotrosRoutingModule
  ],
  exports: [
    
  ]
})
export class SobrenosotrosModule { }
