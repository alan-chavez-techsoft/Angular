import { Injectable, inject } from "@angular/core";
import { pokemons } from "../const/pokeConst";
import { HttpClient } from "@angular/common/http";
import { PokemonEntity } from "../../app/entities/pokemonEntity/pokemonEntity";
import { PokemonAPIResponse } from "../../app/entities/pokemonAPIResponse";
const baseUrl:string = "https://pokeapi.co/api/v2/pokemon";
const offset = 100;

@Injectable({
    providedIn: 'root'
})

export class PokemonService {
    pokemonList:PokemonEntity[] = pokemons;
    private http = inject(HttpClient);

    public getAll(){
      return this.http.get<PokemonAPIResponse>(`${baseUrl}?limit=${offset}`);
    }
    public getPokemonDetails(url:string){
      return this.http.get<any>(url);
    }
    public getbyId(id: number) {
      return this.http.get<PokemonAPIResponse>(`${baseUrl}/${id}`);
    }

}
