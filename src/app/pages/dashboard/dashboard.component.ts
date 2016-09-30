import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {ProjectService} from "../../services/project.service";

@Component({
  //moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
})
export class DashboardComponent implements OnInit {

   projects:any = {meta:"",projects:""};
  // projects:string = "meteo";
  // carsList:Array = [];
  constructor(private authservice:AuthService,private projectservice:ProjectService,private router:Router) { }

  logout(){
  this.authservice.logout();
}
  addProjectClick(){
    this.router.navigate(["/project"]);
  }

  loadProjects(){
  this.projectservice.getProjectsByClub().subscribe(
      x =>{
        console.log(x);
        this.projects = x;
        // if(this.projects.meta.)
      },
      err => {
        console.log(err);
      }
    )
  }
  ngOnInit() {
    this.loadProjects()
  }

}
