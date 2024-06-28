import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './components/menu/menu.component';
import { HoverDirective } from './directives/hover.directive';
import { PokemonTypeDirective } from './directives/pokemon-type.directive';
import { ToolbarComponent } from './components/toolbar/toolbar.component';



@NgModule({
  declarations: [HoverDirective, PokemonTypeDirective],
  imports: [CommonModule],
  exports: [HoverDirective, PokemonTypeDirective]
})
export class SharedModule { }
