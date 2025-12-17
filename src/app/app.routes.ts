import { RouterModule, Routes } from '@angular/router';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';
import { Education } from './components/education/education';
import { Experience } from './components/experience/experience';
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { Skills } from './components/skills/skills';

export const routes: Routes = [
  { path: '', component: Hero },
  { path: 'about', component: About },
  { path: 'skills', component: Skills },
  { path: 'education', component: Education },
  { path: 'experience', component: Experience },
  { path: 'projects', component: Projects },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' }
];
