import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { IGTComponent } from './pages/igt/igt.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomeComponent },
    {path: 'IGT', component: IGTComponent }
];
