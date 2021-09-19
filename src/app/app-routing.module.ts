import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './private/pages/pages.component';
/*
import { BlankComponent } from './pages/blank/blank.component';
import { SearchComponent } from './pages/search/search.component';
import { NotFoundComponent } from './pages/errors/not-found/not-found.component';
import { ErrorComponent } from './pages/errors/error/error.component';
*/

const routes: Routes = [
  {
    path: '',
    component: PagesComponent, children: [
      {
        path: '',
        loadChildren: () => import('./private/pages/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
    ]
  },
  { path: 'landing', loadChildren: './pages/landing/landing.module#LandingModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterModule' },
  // { path: 'error', component: ErrorComponent, data: { breadcrumb: 'Error' } },
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

