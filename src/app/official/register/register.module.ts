import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './register.routes';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    routing
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
