import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NgxSpinnerModule } from "ngx-spinner";

import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './guards/auth.guard';
import { IsProfileCompletedGuard } from './guards/is-profile-completed.guard';
import { IsProfileNotCompletedGuard } from './guards/is-profile-not-completed.guard';
import { NotAuthGuard } from './guards/not-auth.guard';
import { CoreHttpService } from './services/core-http.service';
import { CoreRouterService } from './services/core-router.service';
import { AuthUserStateService } from './services/auth-user-state.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,

    // libs
    NgxSpinnerModule
  ],
  declarations: [
    PageNotFoundComponent,
  ],
  providers: [
    AuthGuard,
    NotAuthGuard,
    IsProfileCompletedGuard,
    IsProfileNotCompletedGuard,
    AuthUserStateService,
    CoreRouterService,
    CoreHttpService,
  ]
})
export class CoreModule {}
