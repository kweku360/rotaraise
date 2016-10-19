import {Component, OnInit, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-projectsidebar',
  templateUrl: './projectsidebar.component.html',
  styleUrls: ['./projectsidebar.component.css']
})
export class ProjectsidebarComponent implements OnInit {
  @Input()  projecturl:string = "";
  
  constructor(private router:Router) { }

  ngOnInit() {
    
}

  goBasic(){
    this.router.navigate(["myaccount/campaign/basic",this.projecturl]);
  }
}
