import { HttpClientModule } from '@angular/common/http';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from "@angular/fire";
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { AppInitializerService, startupServiceFactory } from './app-initializer.service';

@NgModule({
  imports: [
    // ang
    RouterModule,
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule, 

    // libs
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ToastrModule.forRoot(), 

    // app
    AppRoutingModule,
    CoreModule,
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: startupServiceFactory,
      multi: true,
      deps: [AppInitializerService],
    },
    { 
      provide: LocationStrategy, 
      useClass: HashLocationStrategy 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
