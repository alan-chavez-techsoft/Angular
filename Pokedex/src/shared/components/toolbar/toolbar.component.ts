import { Component } from '@angular/core';
import { input } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  imports: [MenuComponent],
  template: `
  <div class="toolbar">
    <img [src]="img()" width="80"/>
    <h1>{{title()}}</h1>
    <app-menu></app-menu>
  </div>
  `,
  styleUrl: './toolbar.component.scss'
})
export class ToolbarComponent {
  title = input.required<string>();
  img = input.required<string>();

}
