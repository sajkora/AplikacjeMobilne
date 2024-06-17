import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  userRole: string | null = null;

  constructor(private router: Router) { }

  ngOnInit() {
    this.checkUserRole();
  }

  checkUserRole() {
    this.userRole = localStorage.getItem('userRole');
    console.log('User role from localStorage:', this.userRole);
  }

  isLoggedIn(): boolean {
    return this.userRole !== null;
  }

  logout() {
    localStorage.removeItem('userRole'); // Clear only the user role
    this.userRole = null; // Reset userRole on logout
    this.router.navigate(['/login']);
  }
}
