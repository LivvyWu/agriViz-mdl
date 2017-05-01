import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './index.routes';
import { ThemeModule } from '../theme/theme.module';
import {IndexComponent} from './index.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ThemeModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
