import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonEntity } from './entities/pokemonEntity';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pokedex';
  pokemons: PokemonEntity[] =[
    {
      name: 'Pineco',
      url: '',
      detail: {
        height: 100,
        id: 204,
        weight:100,
        sprites:{
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png',
        }
      }
    },
    {
      name: 'Toño',
      url: '',
      detail: {
        height: 100,
        id: 204,
        weight:100,
        sprites:{
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png',
        }
      }
    },
    {
      name: 'Martin',
      url: '',
      detail: {
        height: 100,
        id: 204,
        weight:100,
        sprites:{
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png',
        }
      }
    },
    {
      name: 'Kiyoshi',
      url: '',
      detail: {
        height: 100,
        id: 204,
        weight:100,
        sprites:{
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png',
        }
      }
    },
    {
      name: 'Andres',
      url: '',
      detail: {
        height: 100,
        id: 204,
        weight:100,
        sprites:{
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png',
        }
      }
    },
    {
      name: 'Ruth',
      url: '',
      detail: {
        height: 100,
        id: 204,
        weight:100,
        sprites:{
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png',
        }
      }
    },
    {
      name: 'Ivan',
      url: '',
      detail: {
        height: 100,
        id: 204,
        weight:100,
        sprites:{
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
        }
      }
    },
    {
      name: 'Luis',
      url: '',
      detail: {
        height: 100,
        id: 204,
        weight:100,
        sprites:{
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png',
        }
      }
    },
    {
      name: 'Alan',
      url: '',
      detail: {
        height: 100,
        id: 204,
        weight:100,
        sprites:{
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        }
      }
    }
  ]
}
