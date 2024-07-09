import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { PokemonService } from "../../shared/services/pokemon.service";
import { select, Store } from "@ngrx/store";
import { loadPokedex } from "../actions/pokemon.action";
import { pokedexList } from "../selectors/pokemon.selector";
import { switchMap, withLatestFrom } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class PokemonEffects {
    constructor(private actions$: Actions, 
        private pokemonService: PokemonService, 
        private store:Store) {}

    /*loadPokedex$ = createEffect(() => this.actions$.pipe(ofType(loadPokedex),
    withLatestFrom(this.store.pipe(select(pokedexList)),
    switchMap(())
    ))*/
}