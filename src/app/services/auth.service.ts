/**
 * Created by kweku on 9/19/2016.
 * Test  Auth  Service
 */
import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import {fromPromise} from "rxjs/observable/fromPromise";
import {Router} from "@angular/router";


@Injectable()
export class AuthService {
  constructor(private router:Router) {
  }

  isLoggedIn:boolean = false;

  //USER CREDENTIALS
  email : string = "";
  Uuid : string = "";
  lastLogin : any = "";

  // store the URL so we can redirect after logging in
  redirectUrl:string;

  /**
   * this method checks auth user with firebase
   * and is called from the authguard class
   * @params
   * @return Promise<boolean>
   */
  checkAuth(url):Promise<boolean> {
    return new Promise((resolve, reject)=> {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          //change  isloggged in to true
          this.isLoggedIn = true
         // console.log(user)
          //we set user credentials
          this.email = user.email
          this.Uuid = user.uid

          //resolve promise
          resolve(true)
        } else {
          //change islogged to false
          this.isLoggedIn == false
          //redirect to login or homepage
          this.router.navigate(['/login']);

          reject(false)
        }
      })
    })
  }

  /**
   * this method logs out the user and redirects to home
   * @params
   * @return
   */
  logout():void {
    firebase.auth().signOut().then(()=> {
      // Sign-out successful.
      //redirect to login or homepage
      this.router.navigate(['']);
    }, error => {
      // An error happened.
      //TODO handle logout error
    });
  }
}
