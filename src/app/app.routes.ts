import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', redirectTo: 'official', pathMatch: 'full'},
  { path: '**', redirectTo: 'official/index' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
