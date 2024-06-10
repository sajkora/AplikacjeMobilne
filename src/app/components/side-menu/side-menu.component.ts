import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  userRole: string | null = null; // Initialize with default value

  constructor(private router: Router) { }

  ngOnInit() {
    this.userRole = localStorage.getItem('userRole');
    console.log('User role from localStorage:', this.userRole); // Add this line
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
