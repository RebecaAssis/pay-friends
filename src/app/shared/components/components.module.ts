import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input/input.component';
import { ButtonDefaultComponent } from './button-default/button-default.component';



@NgModule({
  declarations: [
    InputComponent,
    ButtonDefaultComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    ButtonDefaultComponent
  ]
})
export class ComponentsModule { }
