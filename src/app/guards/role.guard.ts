import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['expectedRole'];
    const userRole = localStorage.getItem('userRole');

    if (userRole === expectedRole) {
      return true;
    } else {
      if (userRole === 'employee') {
        this.router.navigate(['/job-list']);
      } else if (userRole === 'employer') {
        this.router.navigate(['/job-manage']);
      } else {
        this.router.navigate(['/login']);
      }
      return false;
    }
  }
}
