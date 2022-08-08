import { Injectable } from '@angular/core';
import { LoginModel } from '../../models/login-model';
import { HttpService } from '../http/http.service';
import { Store } from '@ngrx/store';
import { authTokenSuccess, loadingInit, offersSuccess } from '../../state/actions/actions';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(
    private httpService: HttpService,
    private store: Store
  ) { }

  login(data: LoginModel): void {
    this.store.dispatch(loadingInit());
    this.httpService.login(data).subscribe(res => {
      this.store.dispatch(authTokenSuccess({ authToken: res.authToken }));
    });
  }

  logout(): void {
    this.httpService.logout().subscribe(res => {
      console.log(res);
    });
  }

  getOffers(): void {
    this.store.dispatch(loadingInit());
    this.httpService.getOffers().subscribe(res => {
      this.store.dispatch(offersSuccess({ offers: res.offers }));
    });
  }

  getSubscription(offerId: number): void {
    this.httpService.getSubscription(offerId).subscribe(res => {
      console.log(res);
    });
  }


}
