import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PokemonEntity } from '../../../../entities/pokemonEntity';
import { PokemonService } from '../../../../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokedex-list',
  standalone: false,
  template: `
    <div class="content">
      <div class="filterbox" fxFlex="60">
        <label>Buscar</label>
        <input #autofocus [(ngModel)]="filterValue">
      </div>
      @for(pokemon of pokemonsList | filter: filterValue; track pokemon.name){
        <div class="pokemon-card">
          <img width="80" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{ pokemon.detail.id }}.png" />
          <h3>{{ pokemon.name | pokename }}</h3> 
          <a [routerLink]="[pokemon.detail.id]">Details</a> 
        </div>  
      }
  </div>
  `,
  styleUrl: './pokedex-list.component.css'
})
export class PokedexListComponent implements OnInit{
  title = 'pokedex';
  pokemonsList:PokemonEntity[];
  filterValue: string = '';
  @ViewChild('autofocus') autofocus: ElementRef;
  
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonsList = this.pokemonService.getPokemons()
  }
}
