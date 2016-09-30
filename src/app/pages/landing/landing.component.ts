import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";


@Component({
  //moduleId: module.id,
  selector: 'app-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.css'],

})
export class LandingComponent implements OnInit {

  isLoggedOn:boolean = false

  constructor(private authservice:AuthService) { }

  ngOnInit() {
    //lets load jq components
    this.loadJqueryComponents()
    this.checkLogin();
  }
  
  checkLogin(){
    if(this.authservice.isLoggedIn == true){
      console.log("logged in")
      this.isLoggedOn  = true;
    }else{
      this.isLoggedOn = false;
      console.log("logged out")
    }
  }

  loadJqueryComponents(){

    jQuery('.ui.dropdown').dropdown('get value');
    jQuery('#example2').progress({
      percent: 44
    });
    jQuery('#example3').progress({
      percent: 10
    });
  }

}
