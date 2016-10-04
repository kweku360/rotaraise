import {Component, OnInit, Input} from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'FeaturedCampaignComponent',
  templateUrl: 'featuredcampaigns.component.html',
  styleUrls: ['featuredcampaigns.component.css']
})
export class FeaturedcampaignsComponent implements OnInit {

  @Input()  projects:any = {meta:"",projects:""};
  url:string = "http://localhost/rotaraise/v1/uploads/";
  constructor() { }

  ngOnInit() {
  }
  loadProgress(){
    jQuery('.homepercent').progress({});
  }

}
