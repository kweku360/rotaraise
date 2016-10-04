import {Component,EventEmitter, OnInit, Input, Output} from '@angular/core';

@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html',
  styleUrls: ['./countrylist.component.css']
})
export class CountrylistComponent implements OnInit {

  @Output() country = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
   jQuery('.cc')
      .dropdown({
        onChange:(value, text, selectedItem)=> {
          if (text != null){
            // custom action
            var name = text.split('>').pop().trim();
            //we can now emit selected values
            this.country.emit({"code":value,"name":name});
          }
        }
      })
  }

}

