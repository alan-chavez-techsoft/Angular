import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { RouterModule } from '@angular/router';
import { routes } from './pages.routes';
import { ShellComponent } from './Shell/shell.component';
import { SharedModule } from '../../shared/shared.module';
import { ToolbarComponent } from '../../shared/components/toolbar/toolbar.component';
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [PagesComponent, ShellComponent, AuthCallbackComponent, LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    ToolbarComponent,
    RouterModule.forChild(routes)
  ],
  bootstrap: [PagesComponent]
})
export class PagesModule { }
