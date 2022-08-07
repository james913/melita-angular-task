import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { OffersComponent } from './components/offers/offers.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { AuthInterceptorService } from './core/services/auth-interceptor/auth-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OffersComponent,
    SubscriptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },],
  bootstrap: [AppComponent]
})
export class AppModule { }
