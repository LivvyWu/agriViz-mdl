import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {VisualComponent} from './visual.component';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [

{
  path: 'visual',
  component: VisualComponent,
  children: [
    {path: '', redirectTo: 'index', pathMatch: 'full'},
    {path: 'index', loadChildren: 'app/visual/index/index.module#IndexModule'},
    {path: 'dashboards', loadChildren: 'app/visual/dashboards/dashboards.module#DashboardsModule'},
    {path: 'charts', loadChildren: 'app/visual/charts/charts.module#ChartsModule'},
    {path: 'data', loadChildren: 'app/visual/data/data.module#DataModule'},
    {path: 'profile', loadChildren: 'app/visual/profile/profile.module#ProfileModule'}
  ]
}];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
