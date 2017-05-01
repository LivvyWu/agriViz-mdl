import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './developer.routes';
import {DeveloperComponent} from './developer.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [DeveloperComponent]
})
export class DeveloperModule { }
