import { animate, state, style, transition, trigger } from '@angular/animations';

export const ANIMATION_DURATION = 300; // Animation duration in 

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
    transition('void <=> *', animate(ANIMATION_DURATION + 'ms ease-out'))
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
    transition('* <=> void', animate(ANIMATION_DURATION + 'ms ease-out'))
  ])

export const imprintAnimations =
  trigger('pageAnimation', [
    state("void", style({
      transform: 'translateY(10vw)',
      opacity: 0
    })),
    state('*', style({
      transform: 'translateX(0)',
      opacity: 1
    })),
    transition('* <=> void', animate(ANIMATION_DURATION + 'ms ease-out'))
  ])