import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  editClick(evt){
    console.log(evt.target.classList)
    jQuery("#"+evt.target.classList[0]).shape('flip left');
  }

  cancel(evt){
    jQuery("#"+evt.target.classList[0]).shape('flip left');
  }
}
