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
  email:string = "";
  uid:string = "";

  ngOnInit() {
    //declare jquery so semantic ui stuff
    jQuery('.ui.dropdown').dropdown();
    //userinfo
   
    this.email = this.authservice.email;
  }

  logout(){
    this.authservice.logout();
  }

}
