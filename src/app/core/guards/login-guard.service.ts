import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectIsLogin } from '../state/selectors/selector';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService implements CanActivate {

  isLogin$: Observable<boolean> = new Observable();

  constructor(
    private store: Store<any>
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let active = false;
    this.store.select(selectIsLogin).subscribe(r => active = r);
    return !active;
  }
}
