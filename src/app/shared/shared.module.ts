import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { CommonsModule } from './commons/commons.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ComponentsModule,
    CommonsModule
  ],
  exports: [
    ComponentsModule,
    CommonsModule
  ]
})
export class SharedModule { }
