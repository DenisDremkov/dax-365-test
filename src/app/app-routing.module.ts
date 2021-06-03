import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { AuthGuard } from './core/guards/auth.guard';
import { NotAuthGuard } from './core/guards/not-auth.guard';
import { E_ROUTE_NAMES } from './core/services/core-router.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: E_ROUTE_NAMES.HOME,
    pathMatch: 'full',
  },
  {
    path: E_ROUTE_NAMES.HOME,
    canLoad: [AuthGuard],
    loadChildren: () =>
      import('./modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: E_ROUTE_NAMES.GUEST,
    canLoad: [NotAuthGuard],
    loadChildren: () =>
      import('./modules/guest/guest.module').then(m => m.GuestModule),
  },

  { path: '**', redirectTo: '/' + E_ROUTE_NAMES.NOT_FOUND },
  { path: E_ROUTE_NAMES.NOT_FOUND, component:  PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
