import { Routes } from '@angular/router';
import { AuthCallbackComponent } from './Pages/auth-callback/auth-callback.component';
import { AuthGuardService } from '../shared/guard/auth-guard.service';
import { LoginComponent } from './Pages/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'auth-callback',
        component: AuthCallbackComponent
    },
    {
        path: '',
        canActivate: [AuthGuardService],
        loadChildren: () => import('../app/Pages/pages.module').then(m => m.PagesModule)
    }
];
