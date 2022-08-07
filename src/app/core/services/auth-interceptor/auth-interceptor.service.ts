import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authToken = localStorage.getItem('authToken');
    let httpReqquest = req;
    if (authToken) {
      httpReqquest = httpReqquest.clone({
        setHeaders: { Authorization: `Bearer ${authToken}` }
      })
    }
    return next.handle(httpReqquest);
  }
}
