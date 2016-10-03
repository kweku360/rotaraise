import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {fromPromise} from "rxjs/observable/fromPromise";
import {Observable} from "rxjs/Rx";

@Injectable()
export class LoginService {

  constructor(private http:Http){}

  verifyLogin(accountmodel:any):Observable<any>{
    return fromPromise(firebase.auth().signInWithEmailAndPassword(accountmodel.email, accountmodel.password))
  }

}
