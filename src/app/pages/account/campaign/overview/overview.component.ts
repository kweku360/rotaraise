import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProjectService} from "../../../../services/project.service";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

  project:any = {meta:"",projects:""};
  url = environment.serverUploadedFile;
  constructor(private projectservice:ProjectService,private route:ActivatedRoute) { }

  ngOnInit() {
    //gets the route params
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.loadProject(id)
    })
  }

    loadProject(id:string){
      this.projectservice.getOneProject(id).subscribe(
        x =>{
          console.log(x);
          this.project = x;

        },
        err => {
          console.log(err);
        }
      )
    }

}
