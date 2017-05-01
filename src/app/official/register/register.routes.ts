import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
    children: [
      //{ path: 'treeview', components: TreeViewComponent }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
