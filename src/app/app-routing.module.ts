import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { OffersComponent } from './components/offers/offers.component';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { LoginGuardService } from './core/guards/login-guard.service';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, canActivate: [LoginGuardService] },
  { path: 'offers', component: OffersComponent, canActivate: [AuthGuardService] },
  { path: 'subscriptions', component: SubscriptionsComponent, canActivate: [AuthGuardService] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'top' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
