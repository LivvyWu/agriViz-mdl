import {Routes, RouterModule} from '@angular/router';

import {ModuleWithProviders} from '@angular/core';
import {DashboardListComponent} from './components/dashboardlist/dashboardlist.component';
import {DashboardCreateComponent} from './components/dashboardcreate/dashboardcreate.component';
import {DashboardEditComponent} from './components/dashboardedit/dashboardedit.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  { path: '', redirectTo: 'list'},
  { path: 'list', component: DashboardListComponent },
  { path: 'create', component: DashboardCreateComponent },
  { path: 'edit/:id', component: DashboardEditComponent }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
