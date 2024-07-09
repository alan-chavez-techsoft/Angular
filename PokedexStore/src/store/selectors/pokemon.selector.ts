import { createFeatureSelector, createSelector } from "@ngrx/store";
import { PokedexState } from "../../shared/models/pokedex-state";

export const pokedexSelector = createFeatureSelector<PokedexState>('pokedex')
export const pokedexList = createSelector(pokedexSelector, state => state.pokedex)
export const pokedexListLoading = createSelector(pokedexSelector, state => state.loading)
export const pokedexError = createSelector(pokedexSelector, state => state.error)
export const selectedPokemon = createSelector(pokedexSelector, state => state.selectedPokemon)