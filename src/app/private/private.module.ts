import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentsTableComponent } from './components/payments-table/payments-table/payments-table.component';
import { HeaderComponent } from './components/header/header/header.component';


@NgModule({
  declarations: [
    HomeComponent,
    PaymentsTableComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule
  ]
})
export class PrivateModule { }
