import { Component } from '@angular/core';

@Component({
  selector: 'app-pages',
  standalone: false,
  template: `
  <h1>Pages</h1>
  <router-outlet></router-outlet>
  `,
  styleUrl: './pages.component.scss'
})
export class PagesComponent {

}