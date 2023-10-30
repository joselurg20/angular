import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DriverComponent } from './pages/driver/driver.component';
import { AboutComponent } from './pages/about/about.component';
import { E404Component } from './pages/e404/e404.component';
import { AuthorComponent } from './pages/about/author/author.component';
import { AngularComponent } from './pages/about/angular/angular.component';

export const routes: Routes = [
    { title: 'Home', path: 'home', component: HomeComponent },
    {
        title: 'Conductores', path: 'driver/:name',
        loadComponent: () => import('./pages/driver/driver.component').then(m => m.DriverComponent),

    },
    {
        title: 'Sobre', path: 'about',
        loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
        ,
        children: [
            { title: 'Autor', path: 'author', component: AuthorComponent },
            { title: 'Angular', path: 'angular', component: AngularComponent },
            { path: '', redirectTo: '/about/angular', pathMatch: 'full' },

        ]
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: E404Component }
];
