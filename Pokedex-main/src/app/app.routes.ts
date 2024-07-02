import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('../app/Pages/pages.module').then(m => m.PagesModule)
    }
];
