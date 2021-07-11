import { animate, animateChild, query, stagger, style, transition, trigger } from '@angular/animations';

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('stagger', [
      transition('* => *', [ 
        query(':enter', [
            style({ opacity: 0 }),
            stagger(1000, [animate('0.5s', style({ opacity: 1 }))])
          ], { optional: true }
        )
      ])
    ]),
    trigger(
      'enterAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('800ms ease-in-out', style({ opacity: 1 }))
      ])
    ]
    ),
    trigger(
      'enterAnimation2', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms ease-in-out', style({ opacity: 1 }))
      ])
    ]
    ),
  ]
})
export class AppComponent {
  title = 'chatbot';
  showCards = false;
  showCards2 = false;
  showCards3 = false;
 
  ngOnInit(){
    setTimeout(()=>{
      this.showCards = true;
    },1000)
    setTimeout(()=>{
      this.showCards3 = true;
    },2000)
    setTimeout(()=>{
      this.showCards2 = true;
    },1)
    
  }
  cards = ['Can I redeem my FB before the original term?', 'How do I pay my Credit card bill?', 'How can I get my Account Statement?', 'What is the tenure of Fixed Deposit?','Start a New Conversation']
}
