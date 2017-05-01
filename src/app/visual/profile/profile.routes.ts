import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: ProfileComponent,
    children: [
      //{ path: 'treeview', components: TreeViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
