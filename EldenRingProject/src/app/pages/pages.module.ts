import { NgModule } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { SharedModule } from "../../shared/shared.module";
import { RouterModule } from "@angular/router";
import { routes } from "./pages.routes";
import { ToolbarComponent } from "../../shared/components/toolbar/toolbar.component";
import { ShellComponent } from "./shell/shell.component";
import { HomeComponent } from "./home/home.component";
import { provideHttpClient } from "@angular/common/http";

@NgModule({
    declarations: [PagesComponent, ShellComponent, HomeComponent],
    imports: [
      SharedModule,
      ToolbarComponent,
      RouterModule.forChild(routes)
    ],
    bootstrap: [],
    providers: [provideHttpClient()]
  })
  export class PagesModule { }