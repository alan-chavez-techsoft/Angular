import { Directive, HostBinding, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appPokemonType]',
  standalone: false
})
export class PokemonTypeDirective implements OnInit {
  @Input() appPokemonType: string ="";
  @HostBinding('style.backgroundColor') bgColor: string = 'none';

  typeColors: { [key: string]: string } = {
    fire: '#F08030',
    water: '#6890F0',
    grass: '#78C850',
    electric: '#F8D030',
    psychic: '#F85888',
    ice: '#98D8D8',
    dragon: '#7038F8',
    dark: '#705848',
    fairy: '#EE99AC',
    fighting: '#C03028',
    steel: '#B8B8D0',
    ground: '#E0C068',
    bug: '#A8B820',
  };
  constructor() { }

  ngOnInit(): void {
      this.bgColor = this.typeColors[this.appPokemonType];
  }
}
