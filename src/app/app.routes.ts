import { Routes } from '@angular/router';
import { SportComponent } from './sport/sport.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'sport', component: SportComponent },
    { path: '**', redirectTo: 'home' }
];
