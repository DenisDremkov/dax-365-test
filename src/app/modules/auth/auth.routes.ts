// ang
import { RouterModule, Routes } from '@angular/router';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { LoginComponent } from './components/login/login.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'complete-profile',
    component: CompleteProfileComponent,
  },
];

export const AuthRoutingModule = RouterModule.forChild(routes);
