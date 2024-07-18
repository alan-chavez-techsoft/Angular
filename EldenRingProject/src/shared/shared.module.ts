import { NgModule } from "@angular/core";
import { BossesService } from "./services/bosses.service";
import { NpcsService } from "./services/npcs.services";
import { ToolbarComponent } from "./components/toolbar/toolbar.component";

@NgModule({
    declarations: [],
    imports: [],
    exports: [],
    providers: [BossesService, NpcsService]
})

export class SharedModule {

}