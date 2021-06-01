import { NgModule } from '@angular/core';
import { LogoComponent } from './components/logo/logo.component';
import { ModalHeaderComponent } from './components/modal-header/modal-header.component';

@NgModule({
  declarations: [
    ModalHeaderComponent,
    LogoComponent,
  ],
  exports: [
    ModalHeaderComponent,
    LogoComponent,
  ]
})
export class SharedModule {}
