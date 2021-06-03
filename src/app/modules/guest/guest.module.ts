import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { GuestComponent } from './components/guest/guest.component';
import { GuestRoutingModule } from './guest.routes';

@NgModule({

  imports: [
    // ang
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    // app
    GuestRoutingModule,
    SharedModule,
  ],

  declarations: [
    GuestComponent
  ],
})
export class GuestModule {}
