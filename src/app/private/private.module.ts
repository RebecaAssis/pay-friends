import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrivateRoutingModule } from './private-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { PaymentsTableComponent } from './components/payments-table/payments-table/payments-table.component';
import { HeaderComponent } from './components/header/header/header.component';
import { SelectComponent } from './components/select/select/select.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    PaymentsTableComponent,
    HeaderComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    PrivateRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class PrivateModule { }
