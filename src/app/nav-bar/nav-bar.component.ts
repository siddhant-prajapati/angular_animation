import { Component } from '@angular/core';
import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './animation';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
  animations : [slideInAnimation]
})
export class NavBarComponent {
  constructor(private contexts: ChildrenOutletContexts) {}

  getRouteAnimationData() {
    console.log(this.contexts);
    
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  }
}
