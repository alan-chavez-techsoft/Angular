import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private router: Router) {}
  email:string = '';
  password:string = '';
  auth = inject(AuthService);
  login(){
    if(this.auth.login(this.email,this.password)){
      this.router.navigate(['/pokemon-list']);
    }
    else{
      alert('Invalid email or password');
    }
  }
}
