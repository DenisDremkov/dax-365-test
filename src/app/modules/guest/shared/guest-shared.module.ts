import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PasswordWrapperComponent } from './components/password-wrapper/password-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [
    PasswordWrapperComponent
  ],
  exports: [
    PasswordWrapperComponent
  ]
})
export class GuestSharedModule {}
