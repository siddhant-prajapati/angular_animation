import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OpenCloseComponent } from './open-close/open-close.component';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OpenCloseComponent, CommonModule, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'angular-animation';
}
