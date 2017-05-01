import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './visual.routes';
import { FormsModule } from '@angular/forms';
import { VisualComponent } from './visual.component';
import { ThemeModule } from './theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ThemeModule
  ],
  declarations: [
    VisualComponent
  ]
})

export class VisualModule {
}
