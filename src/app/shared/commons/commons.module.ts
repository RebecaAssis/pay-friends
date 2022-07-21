import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ReactiveFormsModule
    ],
  exports: [
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class CommonsModule { }
