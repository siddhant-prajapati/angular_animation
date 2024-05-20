import { Routes } from '@angular/router';
import { HomeComponent } from './nav-bar/home/home.component';
import { AboutComponent } from './nav-bar/about/about.component';
import { ContactComponent } from './nav-bar/contact/contact.component';

export const routes: Routes = [
    { path : 'home', component : HomeComponent, data : {  animation: 'HomePage' }},
    { path : 'about', component : AboutComponent, data : {  animation: 'AboutPage' }},
    { path : 'contact', component : ContactComponent, data : {  animation: 'ContactPage' }}
];
