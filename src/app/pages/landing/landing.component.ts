import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ProjectService} from "../../services/project.service";


@Component({
  //moduleId: module.id,
  selector: 'app-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.css'],

})
export class LandingComponent implements OnInit {

  isLoggedOn:boolean = this.authservice.isLoggedIn;
  projects:any = {meta:"",projects:""};
 
  constructor(private authservice:AuthService,private projectservice:ProjectService) { }

  ngOnInit() {
    //lets load jq components
    this.loadJqueryComponents()
    this.loadProjects()
  }


  loadProjects(){
    this.projectservice.getAllProjects().subscribe(
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

  loadJqueryComponents(){
    jQuery('.ui.dropdown').dropdown('get value');
    
  }
  loadProgress(){
    jQuery('#homepercent').progress({});
  }

}
