import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataComponent } from './data.component';
import { routing } from './data.routes';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ThemeModule
  ],
  declarations: [DataComponent]
})
export class DataModule { }
