import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list/pokedex-list.component';

export const routes: Routes = [
    {    
        path: '',
        component: PokedexComponent,
        children: [
            {
                path: '',
                component: PokedexListComponent,
            }
        ]
    }
];