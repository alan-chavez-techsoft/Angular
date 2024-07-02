import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';
import { ShellComponent } from './Shell/shell.component';
import { SharedModule } from '../../shared/shared.module';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';

@NgModule({
  declarations: [PagesComponent, ShellComponent],
  imports: [
    CommonModule,
    SharedModule,
    ToolbarComponent,
    RouterModule.forChild(routes)
  ],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
