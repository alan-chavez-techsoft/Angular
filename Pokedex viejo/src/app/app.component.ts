import { Component } from '@angular/core';
import { PokemonEntity } from './entities/pokemonEntity';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Pokedex';
  pokemons: PokemonEntity[] =[
    {
      name: 'Bulbasaur',
      url: '',
      detail: {
        height: 70,
        id: 1,
        weight: 69,
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        },
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
              imgSource: ''
            }
          },
          {
            slot: 2,
            type: {
              name: 'water',
              url: 'https://pokeapi.co/api/v2/type/4/',
              imgSource: ''
            }
          }
        ]
      }
    },
    {
      name: 'Charmander',
      url: '',
      detail: {
        height: 60,
        id: 4,
        weight: 85,
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
        },
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
              imgSource: ''
            }
          }
        ]
      }
    },
    {
      name: 'Squirtle',
      url: '',
      detail: {
        height: 50,
        id: 7,
        weight: 90,
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
        },
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
              imgSource: ''
            }
          }
        ]
      }
    },
    {
      name: 'Pikachu',
      url: '',
      detail: {
        height: 40,
        id: 25,
        weight: 60,
        sprites: {
          front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        },
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
              imgSource: ''
            }
          }
        ]
      }
    },
    {
      "name": "Jigglypuff",
      "url": "",
      "detail": {
        "height": 50,
        "id": 39,
        "weight": 55,
        "sprites": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
        },
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
              imgSource: ''
            }
          }
        ]
      }
    },
    {
      "name": "Meowth",
      "url": "",
      "detail": {
        "height": 40,
        "id": 52,
        "weight": 42,
        "sprites": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
        },
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
              imgSource: ''
            }
          }
        ]
      }
    },
    {
      "name": "Psyduck",
      "url": "",
      "detail": {
        "height": 70,
        "id": 54,
        "weight": 196,
        "sprites": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
        },
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
              imgSource: ''
            }
          }
        ]
      }
    },
    {
      "name": "Eevee",
      "url": "",
      "detail": {
        "height": 30,
        "id": 133,
        "weight": 65,
        "sprites": {
          "front_default": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
        },
        types: [
          {
            slot: 1,
            type: {
              name: 'grass',
              url: 'https://pokeapi.co/api/v2/type/12/',
              imgSource: ''
            }
          }
        ]
      }
    }
  ]
}
