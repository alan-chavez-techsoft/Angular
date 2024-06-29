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
    this.pokesJaponeses.map((p)=>{
      if(p.ingles === value){
        return p.japo;
      }
      return p.ingles;
    })
    return null;
  }

}
