import { Routes } from "@angular/router";
import { NpcsComponent } from "./npcs.component";
import { NpcsListComponent } from "./npcs-list/npcs-list.component";
import { NpcsDetailComponent } from "./npcs-detail/npcs-detail.component";

export const routes: Routes = [
    {
        path: '',
        component: NpcsComponent,
        children: [
            {
                path: '',
                redirectTo: 'list',
                pathMatch: 'full'
            },
            {
                path: 'list',
                component: NpcsListComponent
            },
            {
                path: 'details/:id',
                component: NpcsDetailComponent
            }
        ]
    }
]