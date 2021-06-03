import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { RegistrationComponent } from './components/registration/registration.component';
import { RegistrationRoutingModule } from './registration.routes';

@NgModule({
  imports: [
    // ang
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // app
    RegistrationRoutingModule,
    SharedModule,
  ],

  declarations: [
    RegistrationComponent
  ],
})
export class RegistrationModule {}
