import { Component } from '@angular/core';
import { CommonModule, ViewportScroller } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ThemeSwitcher } from "../theme-switcher/theme-switcher/theme-switcher";


@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule, ThemeSwitcher],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {

  constructor(private vps: ViewportScroller) { }
  currentElement: string = '';

  scrollTo(elementId: string, event?: Event) {
    // prevent default anchor jump
    event?.preventDefault();

    // set current for potential active styles
    this.currentElement = elementId;

    // perform scrolling
    this.vps.scrollToAnchor(elementId);

    // close collapsed navbar on mobile if it's open
    const navbar = document.getElementById('navbarNav');
    if (navbar && navbar.classList.contains('show')) {
      navbar.classList.remove('show');
      const toggler = document.querySelector('.navbar-toggler');
      if (toggler instanceof HTMLElement) toggler.setAttribute('aria-expanded', 'false');
    }
  }

}
