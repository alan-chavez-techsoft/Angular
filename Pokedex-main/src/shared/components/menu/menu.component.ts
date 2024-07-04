import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { MenuService } from '../../services/menu.service';
import { MenuOptions } from '../../../app/entities/menuOptions';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
  <div class="menu">
    @for (option of menuOptionsToShow; track option.name) {
      <button>{{option.name}}</button>
    }
    <button (click)="logout()" width="10px">Logout</button>
  </div>
  `,
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  constructor(private route:Router,private auth:AuthService, private menu:MenuService) {}
  userRole:string = '';
  menuOptionsToShow:MenuOptions[] = [];
  ngOnInit(){
    this.auth.getUserRole().subscribe((role:string)=> this.userRole = role);
    this.menu.getMenuByRole(this.userRole).subscribe((menuOptions)=> 
      this.menuOptionsToShow = menuOptions)
  }
  goTo(route:string){
    this.route.navigate([route]);
  }

  home(){
    this.route.navigate(['']);
  }

  logout(){
    this.auth.logout();
    this.route.navigate(['/login']);
  }
}
