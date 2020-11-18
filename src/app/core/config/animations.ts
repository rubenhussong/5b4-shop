import { animate, query, style, transition, trigger } from '@angular/animations';

export const pageTransitionAnimation = trigger('routeAnimations', [
    transition('Home <=> Bottle', transformTo(
        { xE: 0, yE: 1, opacityE: 1 },
        { xL: 0, yL: -1, opacityL: 0 }
    ))
]);


function transformTo(
    { xE = 0, yE = 0, opacityE = 1 },
    { xL = 0, yL = 0, opacityL = 1 }
) {
    const optional = { optional: true };
    return [
        style({ position: 'relative' }),
        // Set a default style for enter and leave
        query(':enter, :leave', [
            style({
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%'
            })
        ], optional),
        query(':leave', [
            style({
                opacity: 1,
                transform: `translate(0, 0)`
            })
        ], optional),
        query(':enter', [
            style({
                opacity: `${opacityE}`,
                transform: `translate(${xE}%, ${yE}%)`
            })
        ]),
        // Animate the transition
        query(':leave', [
            animate('300ms ease-out', style({
                opacity: `${opacityL}`,
                transform: `translate(${xL}%, ${yL}%)`
            }))
        ], optional),
        query(':enter', [
            animate('300ms ease-out', style({
                opacity: 1,
                transform: `translate(0, 0)`
            }))
        ]),
    ];
}