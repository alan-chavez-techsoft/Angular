import { Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { ShellComponent } from './shell/shell.component';

export const routes: Routes = [
    {    
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                component: ShellComponent
            }
        ]
    }
];