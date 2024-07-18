import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './bosses.routes';
import { BossesComponent } from './bosses.component';
import { BossesListComponent } from './bosses-list/bosses-list.component';

@NgModule({
  declarations: [BossesComponent,BossesListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  bootstrap: [BossesComponent]
})
export class BossesModule { }
