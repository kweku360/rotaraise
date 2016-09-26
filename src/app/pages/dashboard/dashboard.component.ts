import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  //moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }

  logout(){
    this.authservice.logout();
    console.log("clicked");
  }
  addProjectClick(){
    this.router.navigate(["/project"]);
  }
  ngOnInit() {
  }

}
