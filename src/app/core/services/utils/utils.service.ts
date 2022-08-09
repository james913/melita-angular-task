import { Injectable } from '@angular/core';
import { LoginModel } from '../../models/login-model';
import { HttpService } from '../http/http.service';
import { Store } from '@ngrx/store';
import { authTokenSuccess, loadingInit, logoutSuccess, offersSuccess, subscriptionSuccess } from '../../state/actions/actions';
import { map, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private httpService: HttpService,
    private store: Store,
    private router: Router
  ) { }

  login(data: LoginModel): void {
    this.store.dispatch(loadingInit());
    this.httpService.login(data).subscribe(res => {
      this.store.dispatch(authTokenSuccess({ authToken: res.authToken }));
      this.getOffers();
    });
  }

  logout(): void {
    this.httpService.logout().subscribe(res => {
      this.store.dispatch(loadingInit());
      this.store.dispatch(logoutSuccess());
      this.redirect('login');
    });
  }

  getOffers(): void {
    this.store.dispatch(loadingInit());
    this.httpService.getOffers().subscribe(res => {
      this.store.dispatch(offersSuccess({ offers: res.offers }));
      this.redirect('offers');
    });
  };

  getSubscription(offerId: number): Observable<any> {
    this.store.dispatch(loadingInit());
    return this.httpService.getSubscription(offerId).pipe(
      map(res => {
        res.subscriptions.forEach((sub: any) => {
          sub.offerId = offerId;
        });
        return res;
      }));
  }

  redirect(url: string): void {
    this.router.navigate(['/', url]);
  }

}
