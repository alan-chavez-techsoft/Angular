import { PokemonEntity } from "../../app/entities/pokemonEntity/pokemonEntity";

export interface PokedexState {
    pokedex: PokemonEntity;
    loading: boolean;
    error: null | string;
    selectedPokemon: PokemonEntity | null;
}