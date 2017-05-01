import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ChartsComponent} from './charts.component';
import { FileUploadModule } from 'ng2-file-upload';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {routing} from './charts.routes';
import {ThemeModule} from '../theme/theme.module';
import {ChartListComponent} from './components/chartlist/chartlist.component';
import {ChartCreateComponent} from './components/chartcreate/chartcreate.component';

import {PlotlyComponent} from './components/plotly/plotly.component';
import {TraceComponent} from './components/trace/trace.component';
import {SelectModule} from 'ng-select';
import {FileuploadComponent} from './components/fileupload/fileupload.component';
import { DatagridComponent } from './components/datagrid/datagrid.component';
import { DatagridDirective } from './components/datagrid/datagrid.directive';
import { ChartEditComponent } from './components/chartedit/chartedit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    ThemeModule,
    SelectModule,
    FileUploadModule,
    Ng2SmartTableModule
  ],
  entryComponents: [DatagridComponent],
  declarations: [
    ChartsComponent,
    PlotlyComponent,
    ChartListComponent,
    ChartCreateComponent,
    TraceComponent,
    FileuploadComponent,
    DatagridComponent,
    DatagridDirective,
    ChartEditComponent]
})

export class ChartsModule {
}
