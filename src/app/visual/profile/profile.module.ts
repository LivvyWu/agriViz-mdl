import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { routing } from './profile.routes';
import {ThemeModule} from '../theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ThemeModule
  ],
  declarations: [
    ProfileComponent
  ]
})
export class ProfileModule { }
