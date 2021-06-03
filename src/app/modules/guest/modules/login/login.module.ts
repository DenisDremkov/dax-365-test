import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { LoginComponent } from './components/login/login.component';
import { LoginRoutingModule } from './login.routes';

@NgModule({
  imports: [
    // ang
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // app
    LoginRoutingModule,
    SharedModule,
  ],

  declarations: [
    LoginComponent
  ],
})
export class LoginModule {}
