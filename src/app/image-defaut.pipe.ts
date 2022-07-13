import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageDefaut'
})
export class ImageDefautPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if(!value){
      return 'defaut.jpg';
    }
    return value;
  }

}
