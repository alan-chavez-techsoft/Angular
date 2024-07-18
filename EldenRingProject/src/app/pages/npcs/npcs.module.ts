import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { routes } from "../npcs/npcs.routes";
import { NpcsListComponent } from "./npcs-list/npcs-list.component";
import { NpcsComponent } from "./npcs.component";

@NgModule({
    declarations: [NpcsComponent, NpcsListComponent],
    imports: [
      CommonModule,
      RouterModule.forChild(routes)
    ],
    bootstrap: [NpcsComponent]
  })
  export class NpcsModule { }