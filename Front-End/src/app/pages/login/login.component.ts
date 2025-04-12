import { Component } from '@angular/core';

@Component({
  selector: 'app-login', // Used as a custom HTML tag <app-login>
  templateUrl: './login.component.html', // Links to the HTML file
  styleUrls: ['./login.component.css'] // Links to the CSS file
})
export class LoginComponent {
  // Component logic goes here
  username: string = '';
  password: string = '';

  login() {
    console.log('Logging in with', this.username, this.password);
  }
}
