import { Routes } from "@angular/router";
import { ShellComponent } from "./shell/shell.component";
import { HomeComponent } from "./home/home.component";

export const routes: Routes = [
    {
        path: '',
        component: ShellComponent,
        children: [
            {
                path: 'home',
                component: HomeComponent
            },
            {
                path: 'bosses',
                loadChildren: () => import('./bosses/bosses.module').then(m => m.BossesModule)
            },
            {
                path: 'npcs',
                loadChildren: () => import('./npcs/npcs.module').then(m => m.NpcsModule)
            }
        ]
    }
]