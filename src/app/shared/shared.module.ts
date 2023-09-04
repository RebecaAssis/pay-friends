import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ComponentsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
