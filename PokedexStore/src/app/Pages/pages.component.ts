import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  standalone: false,
  template: `
  <router-outlet></router-outlet>
  `,
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}
