import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
