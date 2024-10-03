import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeDashboardComponent } from './home-dashboard/home-dashboard.component';
import { HomeModule } from '../home/home.module';
import { Router, RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeDashboardComponent
  ],
  imports: [
    CommonModule,
    HomeModule,
  ],
  exports:[
    HomeDashboardComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class DashboardModule { }
