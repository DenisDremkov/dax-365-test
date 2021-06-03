import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './complete-profile.routes';
import { CompleteProfileComponent } from './components/complete-profile/complete-profile.component';
import { CompleteProfileHttpService } from './services/complete-profile-http.service';

@NgModule({
  imports: [
    // ang
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    // app
    AuthRoutingModule,
    SharedModule,
  ],

  providers: [
    CompleteProfileHttpService,
  ],

  declarations: [
    CompleteProfileComponent
  ],
})
export class CompleteProfileModule {}
