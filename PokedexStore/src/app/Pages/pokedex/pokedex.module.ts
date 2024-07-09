import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './pokedex.routes';
import { PokemonGalleryComponent } from './pokemon-galery/pokemon-gallery.component';
import { PokedexComponent } from './pokedex.component';
import { SharedModule } from '../../../shared/shared.module';
import { PokedexDetailComponent } from './pokedex-detail/pokedex-detail.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PokedexLoginComponent } from './pokedex-login/pokedex-login/pokedex-login.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonManageComponent } from './pokemon-manage/pokemon-manage.component';

@NgModule({
  declarations: [PokedexComponent, PokemonGalleryComponent, PokedexDetailComponent, PokedexLoginComponent, PokemonListComponent, PokemonManageComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    FormsModule
  ],
  bootstrap: [PokedexComponent]
})
export class PokedexModule { }
