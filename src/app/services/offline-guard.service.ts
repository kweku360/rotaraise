/**
 * Created by kweku on 9/19/2016.
 * Auth Guard Service for our Routes
 */
import { Injectable }     from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanDeactivate}    from '@angular/router';
import { AuthService }    from './auth.service';
import {Observable} from "rxjs/Rx";

@Injectable()
export class OfflineGuard {

  // canDeactivate(component:T, route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
  //   return undefined;
  // }

}
