import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css', '../login-page/login-page.component.css']
})
export class ProfileComponent {

  entries: { name: string, email: string, image: string }[] = [
    { name: 'John Doe', email: 'johndoe@example.com', image: 'https://randomuser.me/api/portraits/men/1.jpg' },
    { name: 'Jane Smith', email: 'janesmith@example.com', image: 'https://randomuser.me/api/portraits/women/2.jpg' },
    { name: 'Bob Johnson', email: 'bjohnson@example.com', image: 'https://randomuser.me/api/portraits/men/3.jpg' },
    { name: 'Alice Brown', email: 'abrown@example.com', image: 'https://randomuser.me/api/portraits/women/4.jpg' },
    { name: 'David Lee', email: 'davidlee@example.com', image: 'https://randomuser.me/api/portraits/men/5.jpg' },
  ];
  


  constructor(private router: Router) { }

  showAlert() {
    alert('This Page Shows Profiles of Users.');
  }

  logout() {
    this.router.navigateByUrl('/');
  }
}
