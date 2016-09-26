import { Component, OnInit } from '@angular/core';


@Component({
  //moduleId: module.id,
  selector: 'app-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.css'],

})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    //lets load jq components
    this.loadJqueryComponents()

  }

  loadJqueryComponents(){

    jQuery('.ui.dropdown').dropdown('get value');
    jQuery('#example2').progress({
      percent: 44
    });
    jQuery('#example3').progress({
      percent: 10
    });
  }

}
