import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
export const users:user[]=[
    {
    email:"toñoAdmin@pokemon.com",
    password:"toñoñoing124",
    role:"admin"
    },
    {
        email:"pepePokedex@hotmail.com",
        password:"pepepepe123",
        role:"user"
    }
]
export interface user{
    email:string;
    password:string;
    role:string;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    users:user[] = users;
    constructor() {}

    isLogged():Observable<boolean>{
        let user = sessionStorage.getItem('userInfo');
        if  (user){
            return of(true);
        }
        return of(false);
    }

    login(email:String, password:String){
        let findedUser = this.users.find(u => u.email.toLocaleLowerCase() === email.toLocaleLowerCase() 
        && u.password.toLocaleLowerCase() === password.toLocaleLowerCase());
        if(findedUser){
            sessionStorage.setItem('userInfo', JSON.stringify(findedUser));
        }
    }
}