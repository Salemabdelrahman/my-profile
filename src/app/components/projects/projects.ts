import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
})
export class Projects implements AfterViewInit {

  projects = [
    {
      title: 'Task Management System',
      image: 'assets/projects/task-management-system.png',
      description: 'Built role-based access control (Admin, User, Viewer) with session management andCreated responsive RTL UI with task filtering, pagination, and status updates Implemented task assignment with comments, file attachments, and notifications Developed user management and file library modules',
      link: 'https://salemabdelrahman.github.io/task-management-system/',
      technologys: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Bootstrap 5 (RTL)', 'Font Awesome', 'Axios', 'LocalStorage API', 'Git']

    },
    {
      title: 'Alpha',
      image: 'assets/projects/Alpha.png',
      description: 'Developed responsive SPA with Admin and User role-based views Implemented shopping cart with quantity management and real-time totals Created client-side authentication with route guards and protected routes Added internationalization support (ngx-translate) and production deployment on GitHub Pages',
      link: 'https://salemabdelrahman.github.io/Alpha/',
      technologys: ['Angular 16-20', 'TypeScript', 'RxJS', 'HTML5', 'SCSS', 'ngx-translate', 'Bootstrap', 'FontAwesome', 'FakeStoreAPI', 'LocalStorage']
    },
    {
      title: 'FitTrack',
      image: 'assets/projects/Bondi.png',
      description: 'Project Overview: Built a high-converting landing page designed to drive inbound leads with video hero section, trust elements, and responsive reviews carousel. Implemented lead capture form with validation posting directly to Google Sheets via serverless Apps Script Added dark/light theme toggle with persisted preferences using LocalStorage',
      link: 'https://salemabdelrahman.github.io/Bootstrap_5_Design_01_Bondi/',
      technologys: ['HTML5', 'CSS3', 'Vanilla JavaScript', 'Google Apps Script', 'Google Tag Manager', 'LocalStorage', 'Intersection Observer']
    }
  ];

  @ViewChild('projectModal') modalEl!: ElementRef;

  selectedProject: any = null;

  openModal(project: any) {
    this.selectedProject = project;
  }

  ngAfterViewInit(): void {
    if (this.modalEl && this.modalEl.nativeElement) {
      this.modalEl.nativeElement.addEventListener('hidden.bs.modal', () => {
        this.selectedProject = null;
      });
    }
  }

}
