import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  email: string = "";
  password: string = "";
  constructor(private router: Router) {}
  showAlert() {
    alert('This is a login page created using Angular by Pritish Rajpurohit');
  }

  onEmailInput(event: any) {
    this.email = event.target.value;
  }

  onPasswordInput(event: any) {
    this.password = event.target.value;
  }
  

  login(){
    console.log(`Email: ${this.email}, Password: ${this.password}`);
    this.router.navigateByUrl('/profile');
  }
}
