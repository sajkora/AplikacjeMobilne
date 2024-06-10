import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  password: string = '';

  constructor(private router: Router, private alertController: AlertController) {}

  async login() {
    if (this.username && this.password) {
      const userRole = this.getUserRole(this.username, this.password);
      if (userRole) {
        localStorage.setItem('userRole', userRole);
        console.log('User role set to localStorage:', userRole);
        this.router.navigate(['/job-list']);
      } else {
        const alert = await this.alertController.create({
          header: 'Login Failed',
          message: 'Invalid username or password',
          buttons: ['OK'],
        });
        await alert.present();
      }
    } else {
      const alert = await this.alertController.create({
        header: 'Login Failed',
        message: 'Please enter both username and password',
        buttons: ['OK'],
      });
      await alert.present();
    }
  }

  getUserRole(username: string, password: string): string | null {
    if (username === 'employer' && password === '123') {
      return 'employer';
    } else if (username === 'employee' && password === '123') {
      return 'employee';
    } else {
      return null;
    }
  }
}
