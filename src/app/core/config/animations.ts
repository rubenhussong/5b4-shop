import { animate, animateChild, group, query, style, transition, trigger } from '@angular/animations';

export const slideOut = [
    query(':leave', [
        style({
            transform: 'translate(0, 0)'
        }),
        animate('3s ease-out', style({
            transform: 'translate(-100vw, 0)'
        })),
        animateChild()
    ], { optional: true }),
    query(':enter', [
        style({
            transform: 'translate(100vw, 0)'
        }),
        animate('3s ease-out', style({
            transform: 'translate(0, 0)'
        })),
        animateChild()
    ], { optional: true }),
    /*
    transition('* <=> *', transformTo(
        { xE: 0, yE: 1, opacityE: 1 },
        { xL: 0, yL: -1, opacityL: 0 }
    ))
    */
]

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('Home <=> Bottle', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('300ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ]),
    transition('* <=> Imprint', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ]),
      query(':enter', [
        style({ left: '-100%'})
      ]),
      query(':leave', animateChild()),
      group([
        query(':leave', [
          animate('200ms ease-out', style({ left: '100%'}))
        ]),
        query(':enter', [
          animate('300ms ease-out', style({ left: '0%'}))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);