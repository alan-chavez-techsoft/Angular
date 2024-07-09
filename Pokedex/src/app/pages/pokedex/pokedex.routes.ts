import { Routes } from '@angular/router';
import { PokedexComponent } from './pokedex.component';
import { PokemonGalleryComponent } from './pokemon-galery/pokemon-gallery.component';
import { PokedexDetailComponent } from './pokedex-detail/pokedex-detail.component';
import { PokedexLoginComponent } from './pokedex-login/pokedex-login/pokedex-login.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';

export const routes: Routes = [
    {
        path: '',
        component: PokedexComponent,
        children: [
            {
                path: '',
                redirectTo: 'pokemon-list',
                pathMatch: 'full'
            },
            {
                path: 'pokemon-list',
                component: PokemonGalleryComponent
            },
            {
                path: 'pokemon-details/:id',
                component: PokedexDetailComponent,
            },
            {
                path: 'list',
                component: PokemonListComponent
            },
            {
              path: 'login',
              component: PokedexLoginComponent
            }
        ]
    }
];
