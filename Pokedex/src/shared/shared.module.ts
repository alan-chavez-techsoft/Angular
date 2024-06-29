import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HoverDirective } from './directives/hover.directive';
import { PokemonTypeDirective } from './directives/pokemon-type.directive';
import { PokemonService } from './services/pokemon.service';
import { PokenamePipe } from './pipe/pokename.pipe';

@NgModule({
  declarations: [HoverDirective, PokemonTypeDirective,PokenamePipe],
  imports: [CommonModule],
  exports: [HoverDirective, PokemonTypeDirective, PokenamePipe],
  providers: [PokemonService]
})
export class SharedModule {

 }
