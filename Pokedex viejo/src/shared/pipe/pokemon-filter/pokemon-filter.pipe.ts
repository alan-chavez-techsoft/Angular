import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
  name: 'filter'
})
export class PokemonFilterPipe implements PipeTransform {
 
  transform(value: any, arg: any): any {
    const resultPosts = [];
    for(const poke of value){
      if(poke.name.indexOf(arg) > -1){
         resultPosts.push(poke);
      };
    };
    return resultPosts;
  }
 
}
