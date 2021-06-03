import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ErrorMessageComponent } from './components/error-message/error-message.component';
import { LogoComponent } from './components/logo/logo.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  declarations: [
    ModalHeaderComponent,
    LogoComponent,
    ErrorMessageComponent,
    LogoutComponent,
  ],
  exports: [
    ModalHeaderComponent,
    LogoComponent,
    ErrorMessageComponent,
    LogoutComponent,
  ]
})
export class SharedModule {}
