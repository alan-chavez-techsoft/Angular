import { Component, OnInit } from '@angular/core';
import { PokemonEntity } from '../../../../entities/pokemonEntity';
import { pokemons } from '../../../../../shared/const/pokeConst';
import { PokemonService } from '../../../../../shared/services/pokemon.service';

@Component({
  selector: 'app-pokedex-list',
  standalone: false,
  template: `
    <div class="content">
    <div *ngFor="let pokemon of pokemonsList">
      <img width="80" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{ pokemon.detail.id }}.png" />
      <h3>{{ pokemon.name | pokename }}</h3> 
      <a [routerLink]="[pokemon.detail.id]">Details</a> 
    </div>  
  </div>
  `,
  styleUrl: './pokedex-list.component.css'
})
export class PokedexListComponent implements OnInit{
  title = 'pokedex';
  pokemonsList:PokemonEntity[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemonsList = this.pokemonService.getPokemons()
  }
}
