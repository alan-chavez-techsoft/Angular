import { Injectable, inject } from "@angular/core";
import { CanActivate, Router} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuardService implements CanActivate{
    private authService = inject(AuthService);
    isLogged = false;
    constructor(private router: Router) {}
    canActivate():boolean{
        this.authService.isLogged().subscribe(l=>this.isLogged = l);
        if(this.isLogged){
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}