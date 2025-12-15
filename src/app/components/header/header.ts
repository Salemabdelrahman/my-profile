import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeSwitcher } from "../theme-switcher/theme-switcher/theme-switcher";

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, ThemeSwitcher],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

}
