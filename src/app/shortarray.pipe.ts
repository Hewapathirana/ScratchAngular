import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortarray'
})
export class ShortarrayPipe implements PipeTransform {

  transform(value: any[], args?: string): any {
      if (args === 'asc') {
        return value.sort();
      } else if (args === 'dsc') {
        return value.sort().reverse();
    }
  }

}
