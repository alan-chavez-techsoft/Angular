import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  standalone: false,
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrl: './pokedex.component.scss'
})
export class PokedexComponent {


}
