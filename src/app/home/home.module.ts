import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductscardsComponent } from './productscards/productscards.component';
import { ProddetailsComponent } from './proddetails/proddetails.component';



@NgModule({
  declarations: [
    ProductscardsComponent,
    ProddetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ProductscardsComponent
  ]
})
export class HomeModule { }
