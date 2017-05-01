import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardListComponent } from './components/dashboardlist/dashboardlist.component';
import { DashboardCreateComponent } from './components/dashboardcreate/dashboardcreate.component';
import {routing} from './dashboards.routes';
import {ThemeModule} from '../theme/theme.module';
import {DashboardsComponent} from './dashboards.component';
import { DashboardEditComponent } from './components/dashboardedit/dashboardedit.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    ThemeModule
  ],
  declarations: [
    DashboardsComponent,
    DashboardListComponent,
    DashboardCreateComponent,
    DashboardEditComponent]
})
export class DashboardsModule { }
