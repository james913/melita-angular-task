import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Store } from '@ngrx/store';
import { selectAuthToken } from '../../state/selectors/selector';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  private authToken$: Observable<string | null> = new Observable();
  private authToken: string | null = null;

  constructor(
    private store: Store<any>
  ) {
    this.authToken$ = this.store.select(selectAuthToken);
    this.authToken$.subscribe(authToken => this.authToken = authToken);
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let httpReqquest = req;
    if (this.authToken) {
      httpReqquest = httpReqquest.clone({
        setHeaders: { Authorization: `Bearer ${this.authToken}` }
      })
    }
    return next.handle(httpReqquest);
  }
}
