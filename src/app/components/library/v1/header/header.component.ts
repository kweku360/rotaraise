import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../../services/auth.service";

@Component({
  //moduleId: module.id,
  selector: 'HeaderComponent',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor(private authService:AuthService) { }

  isLoggedOn:boolean = this.authService.isLoggedIn;

  ngOnInit() {
   
  }
//fix for ngIf and other directives - loads jquery plugins after angular renders components
  loadJQuery(){
    jQuery('.rr-about').dropdown('get value');
  }
  
  logout(){
    this.authService.logout();
  }
}
