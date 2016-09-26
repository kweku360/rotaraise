import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.ui.dropdown').dropdown('get value');
  }

}
