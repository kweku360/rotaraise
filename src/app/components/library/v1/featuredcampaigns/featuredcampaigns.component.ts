import {Component, OnInit, Input} from '@angular/core';
import {environment} from "../../../../../environments/environment";

@Component({
  //moduleId: module.id,
  selector: 'FeaturedCampaignComponent',
  templateUrl: 'featuredcampaigns.component.html',
  styleUrls: ['featuredcampaigns.component.css']
})
export class FeaturedcampaignsComponent implements OnInit {

  @Input()  projects:any = {meta:"",projects:""};
  url:string = environment.serverUploadedFile;
  constructor() { }

  ngOnInit() {
  }
  loadProgress(){
    jQuery('.homepercent').progress({});
  }

}
