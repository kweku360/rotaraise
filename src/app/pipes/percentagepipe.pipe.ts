import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentagepipe'
})
export class PercentagepipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return 35;
  }

}
