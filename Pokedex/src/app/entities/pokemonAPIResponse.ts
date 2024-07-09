import { PokemonEntity } from "./pokemonEntity/pokemonEntity";

export interface PokemonAPIResponse {
    count: number;
    next: string;
    previous: string;
    results: PokemonEntity[];
  }