import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {routing} from './official.routes';
import {ThemeModule} from './theme/theme.module';
import {FormsModule} from '@angular/forms';
import {OfficialComponent} from './official.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    ThemeModule
  ],
  declarations: [
    OfficialComponent
  ]
})
export class OfficialModule {
}
