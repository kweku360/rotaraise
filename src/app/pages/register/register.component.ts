import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeaderComponent} from './../../components/library/v1/header/header.component';
import {FooterComponent} from './../../components/library/v1/footer/footer.component';
import {RegisterService} from './../../services/register.service';
import {ClubInfo} from "../../models/clubinfo";
import {$} from "protractor/globals";
import {WindowrefService} from "../../services/windowref.service";

@Component({
  //moduleId: module.id,
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css'],
})
export class RegisterComponent implements OnInit {

  //we declare model club info -- we can make all fie;ds optional or use null values here
  model = new ClubInfo(0, "", "", "", "", "", "","", "", "", "", "","","");

  accountmodel = {email: "", password: ""};
  showError:boolean = false;
  showErrorTxt = ""
  errorClasses = {
    emailfieldError: "",
    loginerror: "none",
  }

  cssClasses = {
    loaderhide : "none",
    emailtakenhide : "hidden",
    successicon : "none",
    loading : ""
  }

  onCountry(evt){
    this.model.country = evt.name;
    this.model.countrycode = evt.code;
  }
  constructor(private winref:WindowrefService,private router:Router,private registerservice:RegisterService) {
  }

  ngOnInit() {
    this.validateForm();

  }
  //function does live checking of email
  verifyEmail() {
    //checks for user input before checkin
    if(this.accountmodel.email != "" && this.validateEmail(this.accountmodel.email)){
      this.cssClasses.loaderhide = "block"
      this.cssClasses.emailtakenhide = "hidden" //hide error txt
      this.cssClasses.successicon = "none" //hide success icon

      //subscribe to live checking
      this.registerservice.verifyEmail(this.accountmodel.email).subscribe(
         x=> {
          if(x.length == 1){
            //means email exists
            this.cssClasses.loaderhide = "none" //hide loader
            this.cssClasses.emailtakenhide = "" //show error txt
            this.cssClasses.successicon = "none" //hide success icon
          }else{
            //means email dowsent exist
            this.cssClasses.loaderhide = "none"//hide loader
            this.cssClasses.emailtakenhide = "hidden" //hide error txt
            this.cssClasses.successicon = "block" //show success icon
          }
        },
        err=>{
          //means email dowsent exist or some other error we really dont care abt
          this.cssClasses.loaderhide = "none"//hide loader
          this.cssClasses.emailtakenhide = "hidden" //hide error txt
          this.cssClasses.successicon = "block" //show success icon
        }
      )
    }


  }

  //funtion for pub sub
  streamFirstRegistration() {
    //we have a stream of activities for the registration process
    //we subscribe to the register service and receive updates
    //we modify the ui accordingly and call the next stream
    this.registerservice.firstStream(this.accountmodel, this.model).subscribe(
      x =>{
        console.log(x);
        //we make call to second Stream
        this.streamSecondRegistration(x.uid);
      },
      err => {
        console.log(err);
        //remover loading state
        this.cssClasses.loading = "";

        //show error saving
        this.showError = true;
        this.showErrorTxt = "Unable to Register Now. Try Again later"
      }
    )

  }

  streamSecondRegistration(uid:string){
    this.registerservice.secondStream(uid, this.model).subscribe(
      x =>{
        console.log(x);
        //verify save success

        //remove loading state
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
        //show error saving
        this.showError = true;
        this.showErrorTxt = "Unable to Register Now. Try Again later"
        //remove loader
        this.cssClasses.loading = "loading";
      }
    )
  }

  validateForm() {
    //noinspection TypeScriptUnresolvedFunction
    jQuery('.ui.dropdown').dropdown('get value');


    //noinspection TypeScriptValidateTypes
    jQuery('.ui.form').submit((e)=> {
      e.preventDefault();// usually use this, but below works best here.
      //scroll to top
      this.winref.scrollTo(0,0);
    });

    jQuery('.ui.input').popup()
  //noinspection TypeScriptUnresolvedFunction
    jQuery('.ui.form').form({
          inline: true,
          onSuccess: ()=>{
            this.streamFirstRegistration();
            //we show the loading form state
            this.cssClasses.loading = "loading";

            //hide error if visible
            this.showError = false;
            this.showErrorTxt = ""

          },
          fields: {
            email: {
              identifier: 'email',
              rules: [
                {type: 'empty', prompt: 'Please enter your club email'},
                {type: 'email', prompt: 'Please enter a valid email'}
              ]
            },
            password: {
              identifier: 'password',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please enter a password'
                },
                {
                  type: 'minLength[6]',
                  prompt: 'Your password must be at least {ruleValue} characters'
                }
              ]
            },
            cpassword: {
              identifier: 'cpassword',
              rules: [
                {
                  type: 'match[password]',
                  prompt: 'Your passwords do not match'
                }
              ]
            },
            clubname: {
              identifier: 'clubname',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please club name is required'
                }
              ]
            },
            presidentname: {
              identifier: 'presidentname',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please president name is required'
                }
              ]
            },
            district: {
              identifier: 'district',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please district is required'
                }
              ]
            },
            city: {
              identifier: 'city',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please city is required'
                }
              ]
            },
            country: {
              identifier: 'country',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please select a country'
                }
              ]
            },
            sponsor: {
              identifier: 'sponsor',
              rules: [
                {
                  type: 'empty',
                  prompt: 'Please Rotary Sponsor is required'
                }
              ]
            },

          }
        }
      );
  }
//thys validates email before testing for uniqueness
 validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

}
