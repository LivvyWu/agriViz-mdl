import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './support.routes';
import {SupportComponent} from './support.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [SupportComponent]
})
export class SupportModule { }
