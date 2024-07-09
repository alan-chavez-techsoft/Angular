import { Component } from '@angular/core';

@Component({
  selector: 'app-pokedex-login',
  standalone: false,
  template: `
  <br>
  <br>
  <br>
  <br>
  <div class="container">
    <div>
      <label for="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required>
    </div>

    <div>
      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required>
    </div>

    <button type="submit">Login</button>
    <label>
      <input type="checkbox" checked="checked" name="remember"> Remember me
    </label>
  </div>

  `,
  styleUrl: './pokedex-login.component.scss'
})
export class PokedexLoginComponent {

}
