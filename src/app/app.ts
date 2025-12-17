import { RouterOutlet } from '@angular/router';
import { Component, OnInit, signal, HostListener } from '@angular/core';
import * as AOS from 'aos';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Skills } from "./components/skills/skills";
import { Education } from "./components/education/education";
import { Experience } from "./components/experience/experience";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Skills, Education, Experience, Projects, Contact, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('my-profile');

  ngOnInit(): void {
    AOS.init();
  }

  // up Button function for Hidden Scroll To Top Button
  screenHeight = window.innerHeight;
  isShow: boolean = false;

  // Show/hide button based on window scroll using HostListener
  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isShow = scrollTop >= this.screenHeight / 2;
  }

  @HostListener('window:resize', [])
  onWindowResize() {
    this.screenHeight = window.innerHeight;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

}
