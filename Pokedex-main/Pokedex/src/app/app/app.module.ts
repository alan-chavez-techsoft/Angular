import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HoverDirective } from '../directives/hover.directive';
import { PokemonTypeDirective } from '../directives/pokemon-type.directive';



@NgModule({
  declarations: [AppComponent, HoverDirective, PokemonTypeDirective],
  imports: [
    CommonModule,
    BrowserModule
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
