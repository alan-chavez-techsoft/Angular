import { Component } from '@angular/core';
import { input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  standalone: true,
  template: `
  <div class="toolbar">
    <img alt="logo" [src]="img" width="80"/>
    <h1>{{title}}</h1>
    <button (click)="redirectHome()">Home</button>
    <button (click)="redirectBosses()">Bosses</button>
    <button (click)="redirectNpcs()">NPCs</button>
  </div>
  `,
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {
  constructor(private router:Router) {}
  title = 'Elden Ring Project';
  img = 'https://cdnb.artstation.com/p/assets/images/images/046/434/977/large/yujie-huang-elden-ring.jpg?1645108386';

  redirectHome(){
    this.router.navigate(['home']);
  }

  redirectBosses(){
    this.router.navigate(['bosses']);
  }

  redirectNpcs(){
    this.router.navigate(['npcs']);
  }
}
