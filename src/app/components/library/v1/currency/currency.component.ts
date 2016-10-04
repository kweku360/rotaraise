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
  }

}
