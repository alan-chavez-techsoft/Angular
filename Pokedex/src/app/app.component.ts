import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokemonEntity } from './entities/pokemonEntity/pokemonEntity';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Pokedex';
}
