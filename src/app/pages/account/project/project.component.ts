import {Component, OnInit} from '@angular/core';
import {ProjectModel} from "../../../models/project";
import {ProjectService} from "../../../services/project.service";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import * as moment_ from 'moment';

const moment: any = (<any>moment_).default || moment_;

@Component({
  //moduleId: module.id,
  selector: 'app-project',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css'],
})
export class ProjectComponent implements OnInit {

  model = new ProjectModel(0, "", "", "", "","","","","", "", "", "", "", "", 0, 0, 0, 0, "", 0, "");
  datemodel = {"start" : "","end":""}
  simplefile:boolean = false
  public projecturl: string = this.projectservice.generateProjectUrl();
  called:number = 0;

  cssClasses = {
    loading : ""
  }

  constructor(private authservice:AuthService,private projectservice:ProjectService,private router:Router) {
  }

  ngOnInit() {
    this.validateFormOne();
  }

  streamSaveNewProject(){
    //do some cleaning up and changes
    this.model.fundstart = this.datemodel.start;
    this.model.fundend =  this.datemodel.end;
    this.model.urlcode = this.projecturl;
    this.model.clubuuid = this.authservice.Uuid

    this.projectservice.saveNewProject(this.model).subscribe(
      x =>{
        console.log(x);
        //show success modal
        this.cssClasses.loading = "";
        //Clear form
        jQuery('form').form('clear')
        //show modal
        jQuery('.ui.modal') .modal({
          closable  : false,
          onApprove : ()=> {
            this.router.navigate(["/dashboard"])
          }
        }).modal('show');

  },
      err => {
        console.log(err);
        this.cssClasses.loading = "";
        this.called = 0;
      }
    )
  }

  onCountry(evt){
    this.model.country = evt.name;
    this.model.countrycode = evt.code;
  }

  validateFormOne() {

    var that = this;
    jQuery('.ui.dropdown').dropdown('get text');
    //noinspection TypeScriptValidateTypes
    jQuery('#formone').submit(function (e) {
      e.preventDefault();// usually use this, but below works best here.
    });
    //noinspection TypeScriptUnresolvedFunction
    jQuery('#formone').form({
        onSuccess: ()=> {
          //perform save here
          if(this.called == 0){
            this.streamSaveNewProject();
            //show form loading
            this.cssClasses.loading = "loading";
            this.called =+ 1;
          }
        },
        fields: {
          name: {
            identifier: 'name',
            rules: [
              {type: 'empty', prompt: 'Please enter your project name'},
            ]
          },
          tagline: {
            identifier: 'tagline',
            rules: [
              {type: 'empty', prompt: 'Please enter project tagline'},
            ]
          }
        }
      }
    );
  }
}
