import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list/pokedex-list.component';
import { PokedexDetailComponent } from './pokedex-detail/pokedex-detail.component';

export const routes: Routes = [
    {    
        path: '',
        component: PokedexComponent,
        children: [
            {
                path: '',
                component: PokedexListComponent
            },
            {
                path: ':pokemonId',
                component: PokedexDetailComponent
            }
        ]
    }
];