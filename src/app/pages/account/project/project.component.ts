import {Component, OnInit} from '@angular/core';
import {ProjectModel} from "../../../models/project";

@Component({
  //moduleId: module.id,
  selector: 'app-project',
  templateUrl: 'project.component.html',
  styleUrls: ['project.component.css'],
})
export class ProjectComponent implements OnInit {

  model = new ProjectModel(0, "", "", "summer job", "Cant Beat us", "", "", "", "", "", 0, 0, 0, 0, "", 0, "");

  projectClasses = {
    toggleStepOneForm: "",
    toggleStepTwoForm: "none",
    toggleStepThreeForm: "none",

    stepOne: "active",
    stepTwo: "",
    stepThree: "",

    validateStepOne: "false"
  }

  constructor() {
  }

  ngOnInit() {
    this.validateFormOne();
  }

  step2() {

    //hide other steps
    this.projectClasses.toggleStepOneForm = "none";
    this.projectClasses.toggleStepThreeForm = "none";
    
    this.projectClasses.stepOne = "";
    this.projectClasses.stepTwo = "active";
    this.projectClasses.stepTwo = "";

    //show step
    this.projectClasses.toggleStepTwoForm = "";
  }

  keyCount() {

  }

  validateFormOne() {
    var that = this;

    //noinspection TypeScriptValidateTypes
    jQuery('#formone').submit(function (e) {
      e.preventDefault();// usually use this, but below works best here.
    });
    //noinspection TypeScriptUnresolvedFunction
    jQuery('#formone').form({
        onSuccess: function () {
          that.step2()
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
