import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstant } from 'src/app/shared/constants';
import { LoginModel } from '../../models/login-model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly endPoint = AppConstant.API_ENDPOINT;

  constructor(private http: HttpClient) { }

  login(data: LoginModel): Observable<any> {
    const url = `${this.endPoint}/login`;
    return this.http.post(url, data);
  }

  logout(): Observable<any> {
    const url = `${this.endPoint}/logout`;
    return this.http.get('');
  }

  getOffers(): Observable<any> {
    const url = `${this.endPoint}/offers`;
    return this.http.get(url);
  }

  getSubscription(offerId: number): Observable<any> {
    const url = `${this.endPoint}/offers/${offerId}/subscriptions`;
    return this.http.get(url);
  }
}
