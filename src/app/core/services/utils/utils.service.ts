import { Injectable } from '@angular/core';
import { Login } from '../../models/login-model';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private httpService: HttpService) { }

  login(data: Login): void {
    this.httpService.login(data).subscribe(res => {
      localStorage.setItem('authToken', res.authToken);
    });
  }

  logout(): void {
    this.httpService.logout().subscribe(res => {
      console.log(res);
    });
  }

  getOffers(): void {
    this.httpService.getOffers().subscribe(res => {
      console.log(res);
    });
  }

  getSubscription(offerId: number): void {
    this.httpService.getSubscription(offerId).subscribe(res => {
      console.log(res);
    });
  }


}
