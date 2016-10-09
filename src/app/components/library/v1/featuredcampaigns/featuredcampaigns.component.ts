import {Component, OnInit, Input} from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {Router} from "@angular/router";

@Component({
  //moduleId: module.id,
  selector: 'FeaturedCampaignComponent',
  templateUrl: 'featuredcampaigns.component.html',
  styleUrls: ['featuredcampaigns.component.css']
})
export class FeaturedcampaignsComponent implements OnInit {

  @Input()  projects:any = {meta:"",projects:""};
  url:string = environment.serverUploadedFile;
  constructor(private router:Router) { }

  ngOnInit() {
  }
  loadProgress(){
    jQuery('.homepercent').progress({});
  }
  getDetails(uuid){
    this.router.navigate(['/campaign', uuid]);
  }

}
