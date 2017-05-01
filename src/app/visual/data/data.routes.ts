import { Routes, RouterModule } from '@angular/router';

import { DataComponent } from './data.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: DataComponent,
    children: [
      //{ path: 'treeview', components: TreeViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
