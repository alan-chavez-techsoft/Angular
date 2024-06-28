import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
  <div class="menu">
    <button width="10px">Home</button>
    <button width="10px">Pokemon List</button>
  </div>`,
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
