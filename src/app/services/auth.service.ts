/**
 * Created by kweku on 9/19/2016.
 * Test  Auth  Service
 */
import { Injectable } from '@angular/core';
import {Http} from "@angular/http";




@Injectable()
export class AuthService {
  constructor(){
    this.loginCheckOther();
  }

  isLoggedIn: boolean = false;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  loginCheck(){
    var user = firebase.auth().currentUser;

    if (user) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
  }
loginCheckOther(){
  var that = this;
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // User is signed in.
      that.isLoggedIn = true;
    } else {
      // No user is signed in.
      that.isLoggedIn = false;
    }
  });
  }

  login(): boolean {
    return true;//Observable.delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    var that = this;
    firebase.auth().signOut().then(function() {
      // Sign-out successful.
      console.log(that.isLoggedIn)
    }, function(error) {
      // An error happened.
    });
  }
}
