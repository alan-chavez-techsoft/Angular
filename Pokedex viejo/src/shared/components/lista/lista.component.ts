import { Component } from '@angular/core';

@Component({
  selector: 'app-lista',
  standalone: true,
  template: `
  <div>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
      <li>Item 4</li>
      <li>Item 5</li>
    </ul> 
  </div> 
  `,
  styleUrl: './lista.component.css'
})
export class ListaComponent {

}
