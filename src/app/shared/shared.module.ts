import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
/* Modules */
import { MaterialModule } from './material/material.module';
import { PrimeNgModule } from './prime-ng/prime-ng.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    PrimeNgModule
  ]
})
export class SharedModule { }
