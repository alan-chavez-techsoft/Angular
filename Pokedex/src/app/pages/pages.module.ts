import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';
import { SharedModule } from '../../shared/shared.module';
import { ShellComponent } from './shell/shell.component';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';



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
