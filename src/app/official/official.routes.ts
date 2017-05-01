import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {OfficialComponent} from './official.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
export const routes: Routes = [

  {
    path: '',
    component: OfficialComponent,
    children: [
      {path: '', redirectTo: 'index', pathMatch: 'full'},
      {path: 'index', loadChildren: 'app/official/index/index.module#IndexModule'},
      {path: 'developer', loadChildren: 'app/official/developer/developer.module#DeveloperModule'},
      {path: 'support', loadChildren: 'app/official/support/support.module#SupportModule'},
      {path: 'visualizations', loadChildren: 'app/official/visualizations/visualizations.module#VisualizationsModule'},
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
