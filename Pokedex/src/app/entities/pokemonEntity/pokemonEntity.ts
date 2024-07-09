import { PokemonDetailEntity } from "./pokemonDetailEntity";

export interface PokemonEntity{
    name: string;
    url: string;
    detail: PokemonDetailEntity;
}