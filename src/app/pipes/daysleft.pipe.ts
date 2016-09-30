import { Pipe, PipeTransform } from '@angular/core';
import * as moment_ from 'moment';

const moment: any = (<any>moment_).default || moment_;

@Pipe({
  name: 'daysleft'
})
export class DaysleftPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    // console.log(value)
    // var future = moment(value).format("MM/DD/YYYY");
    // console.log(future);
    // var today = moment().format("MM/DD/YYYY");
    // console.log(today);
    // //var d = future.diff(today, 'days')
    // return 10;
    var future = moment(value).format("MM/DD/YYYY");
    var start = moment().format("MM/DD/YYYY");
    var d = future.diff(start, 'days')
  }

}
