// ang
import { RouterModule, Routes } from '@angular/router';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';


const routes: Routes = [
  {
    path: '',
    component: CompleteProfileComponent,
  },
];

export const AuthRoutingModule = RouterModule.forChild(routes);
