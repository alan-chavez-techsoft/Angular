import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './directives/hover.directive';
import { PokemonTypeDirective } from './directives/pokemon-type.directive';
import { PokemonService } from './services/pokemon.service';
import { PokenamePipe } from './pipe/pokedex/pokename.pipe';
import { PokemonFilterPipe } from './pipe/pokedex/pokemonfilter.pipe';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [HoverDirective, PokemonTypeDirective, PokenamePipe, PokemonFilterPipe],
  imports: [CommonModule],
  exports: [HoverDirective, PokemonTypeDirective, PokenamePipe, PokemonFilterPipe],
  providers: [PokemonService, AuthService]
})
export class SharedModule {

 }
