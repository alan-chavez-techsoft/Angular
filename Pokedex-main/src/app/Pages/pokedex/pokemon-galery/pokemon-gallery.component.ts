import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { PokemonEntity } from '../../../entities/pokemonEntity';
import { PokemonService } from '../../../../shared/services/pokemon.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-gallery',
  standalone: false,
  templateUrl: './pokemon-gallery.component.html',
  styleUrl: './pokemon-gallery.component.scss'
})
export class PokemonGalleryComponent implements OnInit{
  pokemonsList:PokemonEntity[] = [];
  filterValue:string ='';

  constructor(private pokeservice: PokemonService, private router: Router) {}

  filterExpression(event:string){
    this.filterValue = event;
  }

  ngOnInit(): void {
    this.pokeservice.getAll().subscribe(p=> {
        p.results.forEach((poke:PokemonEntity) => {
          this.pokeservice.getPokemonDetails(poke.url).subscribe(d =>{
          poke.detail = d;
         });
      });
      this.pokemonsList = p.results;
    });
  }

  redirectToDetails(pokemonId: number) {
    this.router.navigate(['pokemon-details', pokemonId]);
  }
}
