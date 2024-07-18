import { Routes } from '@angular/router';
import { ShellComponent } from './Shell/shell.component';

export const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule)
            }
        ]
    }
];
