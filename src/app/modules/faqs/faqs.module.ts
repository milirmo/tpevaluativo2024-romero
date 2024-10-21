import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqsRoutingModule } from './faqs-routing.module';
import { FaqsComponent } from './page/faqs/faqs.component';


@NgModule({
  declarations: [
    FaqsComponent
  ],
  imports: [
    CommonModule,
    FaqsRoutingModule
  ],
  exports: [
    
  ]
})
export class FaqsModule { }
