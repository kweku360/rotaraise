/**
 * Created by kweku on 9/19/2016.
 * Test  Auth  Service
 */
import { Injectable } from '@angular/core';
import {ClubInfo} from "../models/clubinfo";
import {fromPromise} from "rxjs/observable/fromPromise";
import 'rxjs/add/operator/map';
import {Http, Headers, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Rx";
import {environment} from "../../environments/environment";


@Injectable()
export class RegisterService {
  constructor(private http:Http){}
  private serverUrl = environment.serverUrl;

  saveFireBase(accountmodel:any,clubinfo:ClubInfo):any {
    var that = this;
    var message:any = "";
    firebase.auth().createUserWithEmailAndPassword(accountmodel.email, accountmodel.password)
      .then(function (data) {
        console.log(data)
        clubinfo.useruuid = data.uid
        that.saveToDb(clubinfo);
        return true
      }).catch(function (error) {
      let err:any = error;
      console.log(err);
        message = {
         retval:false,
         errmsg:err.message
       }
    });
    return message;
  }

  firstStream(accountmodel:any,clubinfo:ClubInfo):Observable<any>{
    return fromPromise(firebase.auth().createUserWithEmailAndPassword(accountmodel.email, accountmodel.password))
  }

  secondStream(uid:string,clubinfo:ClubInfo):Observable<string>{
    clubinfo.useruuid = uid
    console.log(clubinfo)
    return this.postDb(clubinfo)

  }

  verifyEmail(memail:any):Observable<any>{
    return fromPromise(firebase.auth().fetchProvidersForEmail(memail))
  }

  saveToDb(clubinfo:ClubInfo){
    this.postDb(clubinfo).subscribe();
  }

  postDb(clubinfo:ClubInfo):Observable<string>{
    let body = JSON.stringify(clubinfo);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this.http.post(this.serverUrl, body, options).map(this.extractData)
     // .catch(this.handleError);
  }

  getTest (): Observable<String> {
    return this.http.get(this.serverUrl+"clubinfo").map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    console.log(body)
    return body.data || { };
  }

  logout():void {

  };
}

