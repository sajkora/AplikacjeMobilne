import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  login() {
    if (this.authService.login(this.username, this.password)) {
      const user = this.authService.getCurrentUser();
      if (user.role === 'employer') {
        this.router.navigate(['/job-manage']);
      } else {
        this.router.navigate(['/job-list']);
      }
    } else {
      alert('Login failed');
    }
  }
}
