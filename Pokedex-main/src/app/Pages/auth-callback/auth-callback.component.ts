import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-callback',
  standalone: false,
  templateUrl: './auth-callback.component.html',
  styleUrl: './auth-callback.component.scss'
})
export class AuthCallbackComponent implements OnInit{
  isLogged = false;
  constructor(private authService: AuthService, private router: Router) {
    this.checkSession();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  checkSession(){
    this.authService.isLogged().subscribe(l=>this.isLogged = l);
    if(this.isLogged){
      this.router.navigate(['']);
    }
  }
}
