import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index.component';
import { routing } from './index.routes';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ThemeModule
  ],
  declarations: [IndexComponent]
})
export class IndexModule { }
