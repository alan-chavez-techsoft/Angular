import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';
import { ShellComponent } from './shell/shell.component';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';
import { PokedexModule } from './pokedex/pokedex.module';



@NgModule({
  declarations: [PagesComponent, ShellComponent],
  imports: [
    CommonModule,
    ToolbarComponent,
    RouterModule.forChild(routes)
  ],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
