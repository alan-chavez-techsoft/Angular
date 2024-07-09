import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokename',
  standalone: false
})
export class PokenamePipe implements PipeTransform {
  pokesJaponeses:any[]=[{ingles:"Bulbasaur",japo:"Fushigidane"},
    {ingles:"Charmander",japo:"Hitokage"},
    {ingles:"Squirtle",japo:"Zenigame"},
    {ingles:"Pikachu",japo:"Pikachū"},
    {ingles:"Jigglypuff",japo:"Purin"},
    {ingles:"Meowth",japo:"Nyāsu"},
    {ingles:"Psyduck",japo:"Kodakku"},
    {ingles:"Eevee",japo:"Uibui"}];  

  transform(value: string): string {
    var japoName = this.pokesJaponeses.find(p=> value.toLowerCase() === p.ingles.toLowerCase())
    if(japoName!=null){
      return japoName.japo
    }
    return value.charAt(0).toUpperCase() + value.slice(1);
  }

}
