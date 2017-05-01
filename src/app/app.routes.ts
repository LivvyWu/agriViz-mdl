import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import {LoginComponent} from './login/login.component';


export const routes: Routes = [
  { path: '', redirectTo: 'official', pathMatch: 'full'},
  { path: '**', redirectTo: 'official/index' },
  { path: 'login', component: LoginComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
