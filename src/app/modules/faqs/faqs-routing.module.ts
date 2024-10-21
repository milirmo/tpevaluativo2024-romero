import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqsComponent } from './page/faqs/faqs.component';

const routes: Routes = [

  { 
    path: 'faqs', component: FaqsComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqsRoutingModule { }
