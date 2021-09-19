import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { HttpClientModule } from '@angular/common/http';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  wheelPropagation: true,
  suppressScrollX: true
};

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AppSettings } from './app.settings';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SharedModule } from './_components/shared/shared.module';

import { PagesComponent } from './private/pages/pages.component';
import { HorizontalMenuComponent } from './_components/menu/horizontal-menu/horizontal-menu.component';
import { VerticalMenuComponent } from './_components/menu/vertical-menu/vertical-menu.component';
import { SidenavComponent } from './_components/sidenav/sidenav.component';
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PerfectScrollbarModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PagesComponent,
    HorizontalMenuComponent,
    VerticalMenuComponent,
    SidenavComponent
  ],
  providers: [
    AppSettings,
    { provide: PERFECT_SCROLLBAR_CONFIG, useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG },
    ],
  bootstrap: [AppComponent],
  schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
})
export class AppModule { }
