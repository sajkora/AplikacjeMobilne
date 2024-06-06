import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private users = [
    { username: 'employer', password: '123456', role: 'employer' },
    { username: 'employee', password: '123456', role: 'employee' }
  ];
  private currentUser: any = null;

  constructor() { }

  login(username: string, password: string): boolean {
    const user = this.users.find(u => u.username === username && u.password === password);
    if (user) {
      this.currentUser = user;
      return true;
    }
    return false;
  }

  register(username: string, password: string, role: string): boolean {
    if (this.users.find(u => u.username === username)) {
      return false;
    }
    this.users.push({ username, password, role });
    return true;
  }

  getCurrentUser() {
    return this.currentUser;
  }

  logout() {
    this.currentUser = null;
  }
}
