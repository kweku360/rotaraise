import { Component, OnInit } from '@angular/core';
import {environment} from "../../../../../environments/environment";
import {ProjectService} from "../../../../services/project.service";
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  savestate = "";
  initstate = "";
  projectInfo:any = {};
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

  editClick(evt,initvalue){
    this.initstate = initvalue;
    jQuery("#edit"+evt.target.classList[0]).transition('fade');
    jQuery("#"+evt.target.classList[0]).transition('fade');

  }

  cancel(evt){
    var str = "#"+evt.target.classList[0].replace("edit","");
    var str1 = "#"+evt.target.classList[0];
    var str2 = "#"+evt.target.classList[0].replace("edit","title");
    jQuery(str2).html(this.initstate);
    jQuery(str1).transition('fade');
    jQuery(str).transition('fade');

    this.savestate = "";

    //Todo cancel saving process
  }

  save(evt,id,table,divname,param){
    this.projectInfo.id = id;
    this.projectInfo.table = table;
    this.projectInfo[param] = jQuery(divname).val();
    this.savestate = "loading disabled";
    this.projectservice.updateProject(this.projectInfo).subscribe(
      (x)=>{
        console.log(x);
        alertify.success("save successfull");
        this.savestate = "";

        //revert
        var str = "#"+evt.target.classList[0].replace("edit","");
        var str1 = "#"+evt.target.classList[0];
        var str2 = "#"+evt.target.classList[0].replace("edit","title");
        jQuery(str2).html(jQuery(divname).val());
        jQuery(str).transition('fade');
        jQuery(str1).transition('fade');
        this.savestate = "";

      },
      err =>{
        console.log(err);
        alertify.error("error saving");
        this.savestate = "";
      }
    )
    //


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


  onCountry(evt){
    jQuery("#rrCountryVal").val(evt.name+"-"+evt.code)
  }

  initViews(){
    //hides edit views on start
    jQuery("#editrrName").hide();
    jQuery("#editrrTagline").hide();
    jQuery("#editrrCity").hide();
    jQuery("#editrrCountry").hide();
  }
}
