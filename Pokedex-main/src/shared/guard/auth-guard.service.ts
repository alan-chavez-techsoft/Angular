import { Injectable, inject } from "@angular/core";
import { CanActivate} from "@angular/router";
import { AuthService } from "../services/auth.service";

@Injectable({
    providedIn: 'root'
})

export class AuthGuardService implements CanActivate{
    private authService = inject(AuthService);
    isLogged = false;
    constructor() {}
    canActivate():boolean{
        this.authService.isLogged().subscribe(l=>this.isLogged = l);
        if(this.isLogged){
            return true;
        }
        return false;
    }
}