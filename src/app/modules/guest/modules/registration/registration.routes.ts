// ang
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';


const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent,
  },
];

export const RegistrationRoutingModule = RouterModule.forChild(routes);
