import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../services/project.service";
import {ActivatedRoute, Params} from "@angular/router";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-campaigndetail',
  templateUrl: './campaigndetail.component.html',
  styleUrls: ['./campaigndetail.component.css']
})
export class CampaigndetailComponent implements OnInit {

  constructor(private projectservice:ProjectService,private route:ActivatedRoute) { }

  project:any = {meta:"",projects:""};
  url = environment.serverUploadedFile;
  link = environment.serverUrl+"campaign/"
  ngOnInit() {
        //gets the route params
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.loadProject(id)
     
    });
  }



  loadjQuery(){
    jQuery('#camprogress').progress({
    });

    jQuery('.menu .item').tab();
  }

  loadProject(id:string){
    this.projectservice.getOneProject(id).subscribe(
      x =>{
        console.log(x);
        this.project = x;
        // if(this.projects.meta.)
      },
      err => {
        console.log(err);
      }
    )
  }


}
