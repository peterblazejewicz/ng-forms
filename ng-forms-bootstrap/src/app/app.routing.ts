import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const rootRouterConfig: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
