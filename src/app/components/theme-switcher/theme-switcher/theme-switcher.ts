import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-switcher',
  imports: [CommonModule],
  templateUrl: './theme-switcher.html',
  styleUrl: './theme-switcher.scss',
})

export class ThemeSwitcher {

  theme = 'dark-theme';

  constructor() {
    this.setTheme(this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    this.setTheme(this.theme);
  }

  setTheme(theme: string) {
    document.body.className = theme;
  }

}
