import { Component } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-open-close',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './open-close.component.html',
  styleUrl: './open-close.component.css',
  animations : [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.8,
        backgroundColor: 'blue'
      })),
     // animate ('duration delay easing')
      transition('open => closed', [
        animate('100ms')
      ]),
      transition('closed => open', [
        animate('100ms')
      ]),
    ]
    )
  ]
    
})
export class OpenCloseComponent {

  isOpen : boolean = true;

  toggle(){
    this.isOpen = !this.isOpen
  }
}
