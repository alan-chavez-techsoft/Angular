import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
export const users:user[]=[
    {
        email:"Admin@pokemon.com",
        password:"admin1",
        role:"admin"
    },
    {
        email:"user@hotmail.com",
        password:"user1",
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

    getUserRole():Observable<string>{
        const userInfoString = sessionStorage.getItem('userInfo');
        if(userInfoString){
            const userInfo = JSON.parse(userInfoString);
            return of(userInfo.role);
        }
        return of('defaultRole');
    }

    login(email:String, password:String):Observable<boolean>{
        let findedUser = this.users.find(u => u.email.toLocaleLowerCase() === email.toLocaleLowerCase() 
        && u.password.toLocaleLowerCase() === password.toLocaleLowerCase());
        if(findedUser){
            sessionStorage.setItem('userInfo', JSON.stringify(findedUser));
            return of(true);
        }
        return of(false);
    }

    logout(){
        sessionStorage.removeItem('userInfo');
    }
}