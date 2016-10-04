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
import {ProjectModel} from "../models/project";
import {AuthService} from "./auth.service";



@Injectable()
export class ProjectService {
  constructor(private http:Http,private authservice:AuthService){}
  private serverUrl = "http://localhost/rotaraise/v1/"

  saveNewProject(project:ProjectModel):Observable<string>{
    console.log("three")
    return this.postDb(project)
  }
  postDb(project:ProjectModel):Observable<string>{
    let body = JSON.stringify(project);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log("four")
    return this.http.post(this.serverUrl+"project", body, options).map(this.extractData)
     // .catch(this.handleError);
  }
  private extractData(res: Response) {
    console.log(res);
    let body = res.json();
    return body;
  }
  generateProjectUrl(){
    return '_' + Math.random().toString(36).substr(2, 9);
  }
  getProjectsByClub():Observable<string>{
    var url:string = this.serverUrl+"project/club/"+this.authservice.Uuid;
    return this.http.get(url).map(this.extractData);
  }
  getAllProjects():Observable<string>{
    var url:string = this.serverUrl+"project";
    return this.http.get(url).map(this.extractData);
  }
}

