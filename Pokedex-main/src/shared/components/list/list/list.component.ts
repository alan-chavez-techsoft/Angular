import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule],
  template: `
  <ul>
  <!-- @for(item of indices; track item){ -->
    <li *ngFor="let item of items">
      <span>{{item.index}}</span> {{item.index}}
    </li>
  <!-- } -->
  </ul>
  `,
  styleUrl: './list.component.scss'
})
export class ListComponent {
  @Input() items: any[] = [];
}
