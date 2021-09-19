
import { NgModule, Component, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../../_components/shared/shared.module';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { DashboardComponent } from './dashboard.component';
import { ListAnimeComponent } from './list-anime/list-anime.component';
import { ListPopularComponent } from './list-popular/list-popular.component';
import { DetailAnimeComponent } from './detail-anime/detail-anime.component';

export const routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'detail/:id', component: DetailAnimeComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
    PerfectScrollbarModule
  ],
  declarations: [
    DashboardComponent,
    ListAnimeComponent,
    ListPopularComponent,
    DetailAnimeComponent
  ],
  schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
})
export class DashboardModule { }
