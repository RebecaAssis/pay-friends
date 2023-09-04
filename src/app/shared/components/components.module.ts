import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ModalComponent } from './modal/modal.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ModalComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    ModalComponent,
    InputComponent
  ]
})
export class ComponentsModule { }
