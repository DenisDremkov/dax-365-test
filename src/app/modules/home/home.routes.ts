import { RouterModule, Routes } from '@angular/router';

import { IsProfileCompletedGuard } from 'src/app/core/guards/is-profile-completed.guard';
import { IsProfileNotCompletedGuard } from 'src/app/core/guards/is-profile-not-completed.guard';
import { E_ROUTE_NAMES } from 'src/app/core/services/core-router.service';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: E_ROUTE_NAMES.SHOPPINGS,
        pathMatch: 'full',
      },
      {
        path: E_ROUTE_NAMES.SHOPPINGS,
        canLoad: [IsProfileCompletedGuard],
        loadChildren: () =>
          import('./modules/shoppings/shoppings.module').then(m => m.ShoppingsModule),
      },
      {
        path: E_ROUTE_NAMES.COMPLETE_PROFILE,
        canActivate: [IsProfileNotCompletedGuard],
        loadChildren: () =>
          import('./modules/complete-profile/complete-profile.module').then(m => m.CompleteProfileModule),
      },
    ]
  },
];

export const HomeRoutingModule = RouterModule.forChild(routes);
