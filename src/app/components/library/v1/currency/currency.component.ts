import {Component,EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  @Output() currencyamt = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
    jQuery('.curamt')
      .dropdown({
        onChange:(value, text, selectedItem)=> {
          if (text != null){
            console.log(value+"-"+text)
            //we can now emit selected values
            this.currencyamt.emit({"amt":value,"curr":name});
          }
        }
      })
  }

}
