import { NgModule } from '@angular/core';
import { PokedexListComponent } from './pokedex-list/pokedex-list/pokedex-list.component';
import { CommonModule } from '@angular/common';
import { PokedexComponent } from './pokedex.component';
import { RouterModule } from '@angular/router';
import { routes } from './pokedex.routes';
import { SharedModule } from '../../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PokedexComponent,PokedexListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  bootstrap: [PokedexComponent]
})
export class PokedexModule { }