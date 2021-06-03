import { RouterModule, Routes } from '@angular/router';

import { E_ROUTE_NAMES } from 'src/app/core/services/core-router.service';
import { GuestComponent } from './components/guest/guest.component';

const routes: Routes = [
  {
    path: '',
    component: GuestComponent,
    children: [
      {
        path: '',
        redirectTo: E_ROUTE_NAMES.LOGIN,
        pathMatch: 'full',
      },
      {
        path: E_ROUTE_NAMES.LOGIN,
        loadChildren: () =>
          import('./modules/login/login.module').then(m => m.LoginModule),
      },
      {
        path: E_ROUTE_NAMES.REGISTRATION,
        loadChildren: () =>
          import('./modules/registration/registration.module').then(m => m.RegistrationModule),
      },
    ]
  },
];

export const GuestRoutingModule = RouterModule.forChild(routes);
