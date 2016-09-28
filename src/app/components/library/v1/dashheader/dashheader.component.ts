import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";

@Component({
  //moduleId: module.id,
  selector: 'app-dashheader',
  templateUrl: 'dashheader.component.html',
  styleUrls: ['dashheader.component.css']
})
export class DashheaderComponent implements OnInit {

  constructor(private authservice:AuthService) { }
  
  //userinfo
  email:string = this.authservice.email;
  uid:string = this.authservice.Uuid;

  ngOnInit() {
    //declare jquery so semantic ui stuff
    jQuery('.ui.dropdown').dropdown();
  }

  logout(){
    this.authservice.logout();
    console.log("clicked");
  }

}
