import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HoverDirective } from './directives/hover.directive';
import { PokemonTypeDirective } from './directives/pokemon-type.directive';



@NgModule({
  declarations: [AppComponent, HoverDirective, PokemonTypeDirective],
  imports: [
    CommonModule,
    BrowserModule,
  ],
  exports: [HoverDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
