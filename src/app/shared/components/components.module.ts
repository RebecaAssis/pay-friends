import { CommonsModule } from './../commons/commons.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonDefaultComponent } from './button-default/button-default.component';
import { HeaderComponent } from './header/header.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonDefaultComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    CommonsModule
  ],
  exports: [
    InputComponent,
    ButtonDefaultComponent,
    HeaderComponent
  ]
})
export class ComponentsModule { }
