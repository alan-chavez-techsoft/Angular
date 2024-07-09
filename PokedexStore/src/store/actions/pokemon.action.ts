import { createAction, props } from "@ngrx/store";
import { PokemonEntity } from "../../app/entities/pokemonEntity/pokemonEntity";

export const loadPokedex = createAction(
    '[Pokedex] Load Pokedex'
)

export const loadPokedexSuccess = createAction(
    '[Pokedex] Load Pokedex Success',
    props<{ message: string}>()
)

export const loadPokedexError = createAction(
    '[Pokedex] Load Pokedex Error',
    props<{ error: string}>()
)

export const loadPokemonDetail = createAction(
    '[Pokedex] Load Pokemon Detail',
    props<{url:string}>()
)

export const loadPokemonDetailSuccess = createAction(
    '[Pokedex] Load Pokemon Detail Success',
    props<{ message: string}>()
)

export const loadPokemonDetailError = createAction(
    '[Pokedex] Load Pokemon Detail Error',
    props<{ error: string}>()
)

export const selectedPokemon = createAction(
    '[Pokedex] Selected Pokemon',
    props<{pokemon: PokemonEntity}>()
)

export const clearSelectedPokemon = createAction(
    '[Pokedex] Clear Selected Pokemon'
)