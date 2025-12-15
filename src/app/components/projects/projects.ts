import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects {

  projects = [
    {
      title: 'Book Haven',
      image: 'assets/project1.png',
      description: 'A full-stack book store web app with user authentication, book management, and reviews.',
      link: '#'
    },
    {
      title: 'SkillSurp',
      image: 'assets/project2.png',
      description: 'A platform for skill sharing and learning, featuring real-time chat and course management.',
      link: '#'
    },
    {
      title: 'FitTrack',
      image: 'assets/project3.png',
      description: 'A fitness tracking app with personalized dashboards and progress analytics.',
      link: '#'
    }
  ];
}
