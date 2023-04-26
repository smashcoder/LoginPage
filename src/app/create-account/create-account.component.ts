import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css', '../login-page/login-page.component.css']
})
export class CreateAccountComponent {
  name: string = "";
  mn: number | undefined;
  email: string = "";
  password: string = "";
  cpass: string = "";
  constructor(private router: Router) {}
  showAlert() {
    alert('In this page, you can create an account.');
  }

  onNameInput(event: any) {
    this.name = event.target.value;
  }

  onMnInput(event: any) {
    this.mn = event.target.value;
  }

  onEmailInput(event: any) {
    this.email = event.target.value;
  }

  onPassInput(event: any) {
    this.password = event.target.value;
  }

  onCPassInput(event: any) {
    this.cpass = event.target.value;
  }
  register() {
    console.log(`Name: ${this.name}, Mobile Number: ${this.mn}, Email: ${this.email}, Password: ${this.password}, Confirm Password: ${this.cpass}`);
    this.router.navigateByUrl('/profile');
  }
}
