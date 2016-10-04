import { Component, OnInit } from '@angular/core';
import {RegisterService} from "../../services/register.service";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.css']
})
export class ResetpasswordComponent implements OnInit {

  accountmodel = {email: "", password: ""};
  cssClasses = {
    toggleForm : "",
    toggleIns : "none",
    loadingBtn : "load"
  }
  constructor(private loginservice:LoginService) { }

  ngOnInit() {
  }

  sendEmail(){
    this.cssClasses.loadingBtn = "loading"
    if(this.accountmodel.email != ""){
      this.loginservice.sendResetEmail(this.accountmodel).subscribe(
        (x)=>{
          // console.log(x);
          this.cssClasses.toggleIns = ""
          this.cssClasses.toggleForm = "none"
        },
        (err)=>{
           console.log(err);
          this.cssClasses.toggleIns = "none"
          this.cssClasses.toggleForm = ""
        }
      )
    }
  }

}
