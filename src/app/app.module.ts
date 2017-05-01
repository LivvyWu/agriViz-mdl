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
import {MDLDirective} from './directive/MaterialDesignLiteUpgradeElement';
import {LoginComponent} from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    MDLDirective,
    LoginComponent
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
