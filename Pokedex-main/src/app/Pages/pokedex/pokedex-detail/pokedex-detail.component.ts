import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../../shared/services/pokemon.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokedex-detail',
  standalone: false,
  templateUrl: './pokedex-detail.component.html',
  styleUrl: './pokedex-detail.component.scss'
})
export class PokedexDetailComponent implements OnInit{
  pokemonId:number = 0;
  currentPokemon: any | undefined;

  constructor(private pokeservice: PokemonService,private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.pokemonId = Number(this.route.snapshot.paramMap.get('id'));

    this.pokeservice.getbyId(this.pokemonId).subscribe(p =>{this.currentPokemon = p
      console.log(this.currentPokemon)
    });

    // if (!this.currentPokemon) {
    //   console.error('Pokémon not found');
    // }
  }
}
