import {NgModule, ModuleWithProviders} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {VizHeaderComponent} from './viz-header/viz-header.component';


const THEME_COMPONENTS = [
  VizHeaderComponent
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ],
  declarations: [...THEME_COMPONENTS],
  exports: [...THEME_COMPONENTS]
})

export class ThemeModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders> {
      ngModule: ThemeModule,
      providers: [
      ],
    };
  }
}

