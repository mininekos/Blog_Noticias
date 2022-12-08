import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertirAMayusculas'
})
export class ConvertirAMayusculasPipe implements PipeTransform {

  transform(value: String): String {
    
    return value.toUpperCase();
  }

}
