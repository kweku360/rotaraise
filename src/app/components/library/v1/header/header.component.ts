import { Component, OnInit } from '@angular/core';

@Component({
  //moduleId: module.id,
  selector: 'HeaderComponent',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    jQuery('.ui.dropdown').dropdown('get value');
  }

}
