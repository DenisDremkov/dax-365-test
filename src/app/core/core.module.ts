import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CoreStateService } from './services/core-state.service';

@NgModule({
  imports: [
  ],

  declarations: [
    HeaderComponent,
    PageNotFoundComponent
  ],
  exports: [
    HeaderComponent
  ],
  providers: [
    CoreStateService
  ]
})
export class CoreModule {}
