import { Routes } from "@angular/router";
import { BossesComponent } from "./bosses.component";
import { BossesListComponent } from "./bosses-list/bosses-list.component";
import { BossesDetailComponent } from "./bosses-detail/bosses-detail.component";

export const routes: Routes = [
    {
        path: '',
        component: BossesComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: BossesListComponent
            },
            {
                path: 'details/:id',
                component: BossesDetailComponent
            }
        ]
    }
]