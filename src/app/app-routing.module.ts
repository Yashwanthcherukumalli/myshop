import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductscardsComponent } from './home/productscards/productscards.component';
import { ProddetailsComponent } from './home/proddetails/proddetails.component';

const routes: Routes = [
  { path: 'products', component: ProductscardsComponent },
  { path: 'product/:id', component: ProddetailsComponent },
  { path: '', redirectTo: '/products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
