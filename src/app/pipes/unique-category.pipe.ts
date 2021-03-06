import { Pipe, PipeTransform } from '@angular/core';
import { Item } from '../models/item.model';

@Pipe({
  name: 'uniqueCategory'
})
export class UniqueCategoryPipe implements PipeTransform {

  transform(items: Item[]): string[]  {
    return items.map(item => item.category)
    .filter((value, index, array) =>
    array.indexOf(value) == index);
  };

}
