import { animate, state, style, transition, trigger } from '@angular/animations';

export const ANIMATION_DURATION_OUT = 0; // Animation duration in 
export const ANIMATION_DURATION_IN = 400; // Animation duration in 

export const homeAnimations =
  trigger('pageAnimation', [
    state("void", style({
      transform: 'translateY(-10vh)',
      opacity: 0
    })),
    state('*', style({
      transform: 'translateY(0)',
      opacity: 1
    })),
    transition('void => *', animate(ANIMATION_DURATION_IN + 'ms ' + (ANIMATION_DURATION_IN / 2) + 'ms ease-in-out')),
    transition('* => void', animate(ANIMATION_DURATION_OUT + 'ms cubic-bezier(.3, 2, .3, .5)'))
  ])

export const bottleAnimations =
  trigger('pageAnimation', [
    state("void", style({
      transform: 'translateX(10vw)',
      opacity: 0
    })),
    state('*', style({
      transform: 'translateX(0)',
      opacity: 1
    })),
    transition('void => *', animate(ANIMATION_DURATION_IN + 'ms ' + (ANIMATION_DURATION_IN / 2) + 'ms ease-in-out')),
    transition('* => void', animate(ANIMATION_DURATION_OUT + 'ms cubic-bezier(.3, 2, .3, .5)'))
  ])

export const imprintAnimations =
  trigger('pageAnimation', [
    state("void", style({
      transform: 'translateY(10vw)',
      opacity: 0
    })),
    state('*', style({
      transform: 'translateY(0)',
      opacity: 1
    })),
    transition('void => *', animate(ANIMATION_DURATION_IN + 'ms ' + (ANIMATION_DURATION_IN / 2) + 'ms ease-in-out')),
    transition('* => void', animate(ANIMATION_DURATION_OUT + 'ms cubic-bezier(.3, 2, .3, .5)'))
  ])

/* ========== Readme

Put in implementing component:

  @Component({
    ...
    styles: [':host { display: block }'],
    animations: [ imprintAnimations ],
    ...
  })
  export class YouRComponent {
    @HostBinding('@pageAnimation') get initAnimation() { return }
    ...

*/