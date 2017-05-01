import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {routing} from './app.routes';

import {VisualModule} from './visual/visual.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {OfficialModule} from './official/official.module';
import {MDL} from './directive/MaterialDesignLiteUpgradeElement';

@NgModule({
  declarations: [
    AppComponent,
    MDL
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule,
    VisualModule,
    OfficialModule,
    routing
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
