import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private platform: Platform) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const storedTheme = localStorage.getItem('theme');
      const isDarkMode = storedTheme ? storedTheme === 'dark' : prefersDark;
      this.toggleDarkTheme(isDarkMode);
    });
  }

  toggleDarkTheme(shouldAdd: boolean) {
    document.body.classList.toggle('dark', shouldAdd);
    localStorage.setItem('theme', shouldAdd ? 'dark' : 'light');
  }

  toggleTheme() {
    const isDarkMode = document.body.classList.contains('dark');
    this.toggleDarkTheme(!isDarkMode);
  }
}
