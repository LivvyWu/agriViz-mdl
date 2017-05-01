import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {ChartListComponent} from './components/chartlist/chartlist.component';
import {ChartCreateComponent} from './components/chartcreate/chartcreate.component';
import {ChartEditComponent} from './components/chartedit/chartedit.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  { path: '', redirectTo: 'list'},
  { path: 'list', component: ChartListComponent },
  { path: 'create', component: ChartCreateComponent},
  { path: 'edit/:id', component: ChartEditComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
