import { RouterOutlet } from '@angular/router';
import { Component, OnInit, signal } from '@angular/core';
import * as AOS from 'aos';
import { Header } from "./components/header/header";
import { Hero } from "./components/hero/hero";
import { About } from "./components/about/about";
import { Skills } from "./components/skills/skills";
import { Education } from "./components/education/education";
import { Experience } from "./components/experience/experience";
import { Projects } from "./components/projects/projects";
import { Contact } from "./components/contact/contact";


@Component({
  selector: 'app-root',
  imports: [Header, Hero, About, Skills, Education, Experience, Projects, Contact],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  protected readonly title = signal('my-profile');

  ngOnInit(): void {
    AOS.init();
  }
}
