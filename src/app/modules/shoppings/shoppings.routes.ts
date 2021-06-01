// ang
import { RouterModule, Routes } from '@angular/router';
import { ShoppingsViewComponent } from './components/view/view.component';

// app

const routes: Routes = [
  {
    path: '',
    component: ShoppingsViewComponent,
  },
];

export const ShoppingsRoutingModule = RouterModule.forChild(routes);
