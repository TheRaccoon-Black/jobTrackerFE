import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
    path: 'login', 
    loadComponent: () => import('./pages/login.page').then(m => m.LoginPage),
    title: 'Login' 
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];
