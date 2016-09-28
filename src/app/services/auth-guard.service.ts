/**
 * Created by kweku on 9/19/2016.
 * Auth Guard Service for our Routes
 */
import { Injectable }     from '@angular/core';
import { CanActivate,Router,ActivatedRouteSnapshot,RouterStateSnapshot }    from '@angular/router';
import { AuthService }    from './auth.service';
import {Observable, Subscription} from "rxjs/Rx";
import {fromPromise} from "rxjs/observable/fromPromise";
import {of} from "rxjs/observable/of";


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    let url: string = state.url;

    return this.authService.checkAuth(url)
  }

  // checkLogin(url: string): boolean {
  //   console.log(this.authService.isLoggedIn + " authguard - checklogin")
  //   if (this.authService.isLoggedIn) {
  //     console.log("hobbit")
  //     return true; }
  //
  //   // Store the attempted URL for redirecting
  //   this.authService.redirectUrl = url;
  //
  //   // Navigate to the login page with extras
  //   this.router.navigate(['/login']);
  //   return false;
  // }
}
