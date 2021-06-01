import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'shoppings',
    pathMatch: 'full',
  },
  {
    path: 'shoppings',
    // canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/shoppings/shoppings.module').then(m => m.ShoppingsModule),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./modules/auth/auth.module').then(m => m.AuthModule),
  },

  { path: '**', redirectTo: '/404' },
  { path: '404', component:  PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
