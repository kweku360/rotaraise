import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeaderComponent} from './../../components/library/v1/header/header.component';
import {FooterComponent} from './../../components/library/v1/footer/footer.component';
import {RegisterService} from './../../services/register.service';
import {ClubInfo} from "../../models/clubinfo";
import {$} from "protractor/globals";

@Component({
  //moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
})
export class RegisterComponent implements OnInit {

  //we declare model club info -- we can make all fie;ds optional or use null values here
  model = new ClubInfo(0, "", "", "", "", "", "","", "", "", "", "");
  accountmodel = {email: "", password: ""};
  errorClasses = {
    emailfieldError: ""
  }

  cssClasses = {
    loaderhide : "none",
    emailtakenhide : "hidden",
    successicon : "none",
  }

  constructor(private registerservice:RegisterService) {
  }

  ngOnInit() {
    this.validateForm();

  }

  get diagnostic() {
    return JSON.stringify(this.accountmodel);
  }

  //function does live checking of email
  verifyEmail() {
    var that = this;// context swap
    //checks for user input before checkin
    if(this.accountmodel.email != ""){

      this.cssClasses.loaderhide = "block"
      that.cssClasses.emailtakenhide = "hidden" //hide error txt
      that.cssClasses.successicon = "none" //hide success icon

      //subscribe to live checking
      this.registerservice.verifyEmail(this.accountmodel.email).subscribe(
        function (x) {
          if(x.length == 1){
            //means email exists
            that.cssClasses.loaderhide = "none" //hide loader
            that.cssClasses.emailtakenhide = "" //show error txt
            that.cssClasses.successicon = "none" //hide success icon
          }else{
            //means email dowsent exist
            that.cssClasses.loaderhide = "none"//hide loader
            that.cssClasses.emailtakenhide = "hidden" //hide error txt
            that.cssClasses.successicon = "block" //show success icon
          }
        },
        function (err) {
          console.log(err);

        }
      )
    }


  }

  //funtion for pub sub
  streamRegistration() {
    var that = this;// context swap

    //we have a stream of activities for the registration process
    //we subscribe to the register service and receive updates
    //we modify the ui accordingly and call the next stream
    this.registerservice.firstStream(this.accountmodel, this.model).subscribe(
      function (x) {
        console.log(x);
      },
      function (err) {
        console.log(err);
        that.errorClasses.emailfieldError = "error"
      },
      function () {
        console.log('Completed');
      }
    )

  }

  validateForm() {
    var that = this;

    //noinspection TypeScriptUnresolvedFunction
    jQuery('.ui.dropdown').dropdown('get value');
    //noinspection TypeScriptValidateTypes
    jQuery('.ui.form').submit(function (e) {
      e.preventDefault();// usually use this, but below works best here.
    });
  //noinspection TypeScriptUnresolvedFunction
    jQuery('.ui.form').form({
          inline: true,
          onSuccess: function () {
            that.streamRegistration();
            // let val:any = that.registerservice.saveFireBase(that.accountmodel,that.model);
            //    console.log(val);
            //  if(val.retval == false){
            //    that.errorClasses.fieldError = "error"
            //  }
          }
          // fields: {
          //   email: {
          //     identifier: 'email',
          //     rules: [
          //       {type: 'empty', prompt: 'Please enter your club email'},
          //       {type: 'email', prompt: 'Please enter a valid email'}
          //     ]
          //   },
          //   cpassword: {
          //     identifier: 'cpassword',
          //     rules: [
          //       {
          //         type: 'empty',
          //         prompt: 'Please enter a password'
          //       },
          //       {
          //         type: 'minLength[6]',
          //         prompt: 'Your password must be at least {ruleValue} characters'
          //       }
          //     ]
          //   },
          //   password: {
          //     identifier: 'password',
          //     rules: [
          //       {
          //         type: 'match[password]',
          //         prompt: 'Your passwords do not match'
          //       }
          //     ]
          //   },
          //   clubname: {
          //     identifier: 'clubname',
          //     rules: [
          //       {
          //         type: 'empty',
          //         prompt: 'Please club name is required'
          //       }
          //     ]
          //   },
          //   presidentname: {
          //     identifier: 'presidentname',
          //     rules: [
          //       {
          //         type: 'empty',
          //         prompt: 'Please president name is required'
          //       }
          //     ]
          //   },
          //   district: {
          //     identifier: 'district',
          //     rules: [
          //       {
          //         type: 'empty',
          //         prompt: 'Please district is required'
          //       }
          //     ]
          //   },
          //   city: {
          //     identifier: 'city',
          //     rules: [
          //       {
          //         type: 'empty',
          //         prompt: 'Please city is required'
          //       }
          //     ]
          //   },
          //   country: {
          //     identifier: 'country',
          //     rules: [
          //       {
          //         type: 'empty',
          //         prompt: 'Please select a country'
          //       }
          //     ]
          //   },
          //   sponsor: {
          //     identifier: 'sponsor',
          //     rules: [
          //       {
          //         type: 'empty',
          //         prompt: 'Please Rotary Sponsor is required'
          //       }
          //     ]
          //   },
          //
          // }
        }
      );
  }

}
