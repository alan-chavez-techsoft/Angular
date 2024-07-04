import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../shared/services/pokemon.service';
import { PokemonEntity } from '../../../entities/pokemonEntity';
import { forkJoin, map, mergeMap } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  standalone: false,
  templateUrl:'./pokemon-list.component.html',
  styleUrl: './pokemon-list.component.scss'
})
export class PokemonListComponent implements OnInit{
  pokemonsList:PokemonEntity[] = [];

  constructor(private pokeservice: PokemonService) {}

  ngOnInit(): void {
    this.pokeservice.getAll().subscribe(p=> {
        p.results.forEach((poke:PokemonEntity) => {
          this.pokeservice.getPokemonDetails(poke.url).subscribe(d =>{
          poke.detail = d;
         });
      });
      this.pokemonsList = p.results;
    });

    this.pokeservice.getAll().pipe(map(response=>{
      response.results.forEach((pokemon) => {
        this.pokeservice.getPokemonDetails(pokemon.url).subscribe(d => pokemon.detail = d)
      })
      return response.results;
    })).subscribe(p => this.pokemonsList = p);
  }
}
