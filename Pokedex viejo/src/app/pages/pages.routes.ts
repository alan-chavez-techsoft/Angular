import { Routes } from '@angular/router';
import { ShellComponent } from './shell/shell.component';

export const routes: Routes = [
    {    
        path: '',
        component: ShellComponent,
        children: [
            {
                path:'',
                redirectTo:'pokemon-list',
                pathMatch:'full'
            },
            {
                path: 'pokemon-list',
                loadChildren: () => import('../pages/pokedex/pokedex.module').then(m => m.PokedexModule)
            }
        ]
    }
];