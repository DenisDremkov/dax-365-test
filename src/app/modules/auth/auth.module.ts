import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthRoutingModule } from './auth.routes';
import { LoginComponent } from './components/login/login.component';
import { AuthHttpService } from './services/auth-http.service';
import { AuthStateService } from './services/auth-state.service';

@NgModule({
  imports: [
    // ang
    FormsModule,
    ReactiveFormsModule,

    // app
    AuthRoutingModule,
    SharedModule,
  ],

  providers: [
    AuthHttpService,
    AuthStateService
  ],

  declarations: [
    LoginComponent
  ],
})
export class AuthModule {}
