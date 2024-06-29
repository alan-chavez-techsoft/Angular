import { Component } from "@angular/core";

@Component({
    selector: 'app-pokedex',
    standalone: false,
    template: `
        <router-outlet></router-outlet>
    `,
    styleUrl: './pokedex.component.css'
})

export class PokedexComponent {
    title = 'Pokedex';
}