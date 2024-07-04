import { Component, inject } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email:string = '';
  password:string = '';
  auth = inject(AuthService);
  login(){
    this.auth.login(this.email,this.password);
  }
}
