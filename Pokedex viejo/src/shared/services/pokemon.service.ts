import { Injectable, inject } from "@angular/core";
import { pokemons } from "../const/pokeConst";
import { PokemonEntity } from "../../app/entities/pokemonEntity";
import { HttpClient } from '@angular/common/http';

const baseUrl:string = 'https://pokeapi.co/api/v2/pokemon'
const offset = 100;
@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    pokemonList:PokemonEntity[] = pokemons
    private http = inject(HttpClient);

    //constructor(private http:HttpClient) { }

    //getPokemons() {
    //    return this.pokemonList
    //}
    //getPokemon(id:number) {
    //    return this.pokemonList.find(pokemon => pokemon.detail.id)
    //}
    public getPokemons() {
        return this.http.get(`${baseUrl}?limit=${offset}`)
    }
    public getPokemon(id:number) {
        return this.http.get(`${baseUrl}/${id}`)
    }
}