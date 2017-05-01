import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {routing} from './visualizations.routes';
import {VisualizationsComponent} from './visualizations.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [VisualizationsComponent]
})
export class VisualizationsModule { }
