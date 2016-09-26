import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from "../../services/login.service";

@Component({
  //moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css'],
})
export class LoginComponent implements OnInit {

  accountmodel = {email: "", password: ""};
  errorClasses = {
    loginerror: "hidden"
  }

  constructor(private loginservice:LoginService,private router:Router) {
  }

  ngOnInit() {
  }

  streamLogin(event) {
    event.preventDefault()
    var that = this;// context swap
    if(this.accountmodel.email != "" || this.accountmodel.password != ""){
      this.loginservice.verifyLogin(this.accountmodel).subscribe(
        function (x) {
          console.log(x);
          that.router.navigate(['/dashboard']);
        },
        function (err) {
          console.log(err);
          that.errorClasses.loginerror = "";
          that.router.navigate(['/dashboard']);
        }
      )
    }
  }

}
