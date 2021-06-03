import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from 'src/app/shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingModule } from './home.routes';

@NgModule({
  imports: [
    // ang
    CommonModule,

    // app
    HomeRoutingModule,
    SharedModule,
  ],

  declarations: [
    HomeComponent,
    HeaderComponent,
  ],
})
export class HomeModule {}
