import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  show: boolean = false;
  submit() {
    console.log('user name is ' + this.email);
    this.clear();
  }
  clear() {
    this.email = '';
    this.password = '';
    this.show = true;
  }
}
