import { Component } from '@angular/core';
import { PokemonEntity } from '../../../entities/pokemonEntity';
import { PokemonService } from '../../../../shared/services/pokemon.service';
import { ActivatedRoute, RouterModule } from '@angular/router';

@Component({
  selector: 'app-pokedex-detail',
  standalone: true,
  imports: [RouterModule],
  template: `
  <div class="pokedex-detail">
    <img width="120" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{ pokemon.detail.id }}.png" />
    <h1>{{pokemon.name}}</h1>
    <h2>{{pokemon.detail.id}}</h2>
    <h3>{{pokemon.detail.height}}</h3>
    <h3>{{pokemon.detail.weight}}</h3>
    <a [routerLink]="['']">Volver</a>  
  </div>
  `,
  styleUrl: './pokedex-detail.component.css'
})
export class PokedexDetailComponent {
  pokemon: PokemonEntity;
  constructor(private pokemonService: PokemonService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pokemon = this.pokemonService.getPokemon(parseInt(this.route.snapshot.paramMap.get('pokemonId')));
  }
}
