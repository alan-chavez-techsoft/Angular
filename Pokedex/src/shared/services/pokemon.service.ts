import { Injectable } from "@angular/core";
import { pokemons } from "../const/pokeConst";
import { PokemonEntity } from "../../app/entities/pokemonEntity";

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    pokemonList:PokemonEntity[] = pokemons
    constructor() { }
    getPokemons() {
        return this.pokemonList
    }
    getPokemon(id:number) {
        return this.pokemonList.find(pokemon => pokemon.detail.id)
    }
}