import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppConstant } from 'src/app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private readonly endPoint = AppConstant.API_ENDPOINT;
  constructor(private http: HttpClient) { }


  loginUser(): Observable<any> {
    const url = `${this.endPoint}/login`;
    const data = {
      "username": "user",
      "password": "password"
    }
    return this.http.post(url, data);
  }

  logoutUser(): Observable<any> {
    const url = `${this.endPoint}/logout`;
    return this.http.get('');
  }

  getOffers(): Observable<any> {
    const url = `${this.endPoint}/offers`;
    return this.http.get(url);
  }

  getSubscription(offerId: string): Observable<any> {
    const url = `${this.endPoint}/offers/${offerId}/subscriptions`;
    return this.http.get(url);
  }
}
