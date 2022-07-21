import { CommonsModule } from './../commons/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonDefaultComponent } from './button-default/button-default.component';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonDefaultComponent,
    HeaderComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    CommonsModule
  ],
  exports: [
    InputComponent,
    ButtonDefaultComponent,
    HeaderComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
