import { Injectable } from "@angular/core";
import { MenuOptions } from "../../app/entities/menuOptions";
import { Observable, of } from "rxjs";
export const adminMenu: MenuOptions[] = [
    {
        name:"Home",
        routerLink:""
    },
    {
        name:"Pokemon List",
        routerLink:"pokemon-list"
    },
    {
        name:"Manage Pokemon",
        routerLink:"pokemon-manage"
    }
]
export const userMenu: MenuOptions[] = [
    {
        name:"Home",
        routerLink:""
    },
    {
        name:"Pokemon List",
        routerLink:"pokemon-list"
    }
]

@Injectable({
    providedIn : 'root'
})
export class MenuService {
    constructor() {}

    public getMenuByRole(role: string):Observable<MenuOptions[]>{
        if(role === 'admin'){
            return of(adminMenu);
        }
        return of(userMenu);
    }
}