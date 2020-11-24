import { Directive } from '@angular/core';

@Directive({
  selector: '[appViewportObserver]'
})
export class ViewportObserverDirective {

  constructor() { }


  private static callback(entries): void {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.remove('under-viewport')
        entry.target.classList.remove('over-viewport')
      } else if (ViewportObserverDirective.isOverViewportCenterX(entry)) {
        entry.target.classList.remove('under-viewport')
        entry.target.classList.add('over-viewport')
      } else {
        entry.target.classList.add('under-viewport')
        entry.target.classList.remove('over-viewport')
      }
    });
  };

  private static isOverViewportCenterX(entry): boolean {
    let viewportCenterX
    if (entry.rootBounds !== null) {
      viewportCenterX = entry.rootBounds.height / 2
    } else {
      viewportCenterX = 400
    }
    return (entry.boundingClientRect.bottom < viewportCenterX)
  }
  
  private static observer = new IntersectionObserver(ViewportObserverDirective.callback);

  // Observes all elements with class "show-on-scroll" in embedding module.
  // Adds 'under-viewport' and 'over-viewport' classes to those elements.
  // These can be used to add different styles in scss depending on the state.
  static observe(): void {
    let targets = document.querySelectorAll(".show-on-scroll");
    targets.forEach(function (target) {
      ViewportObserverDirective.observer.observe(target);
    });
  }

  static unobserve(): void {
    let targets = document.querySelectorAll(".show-on-scroll");
    targets.forEach(function (target) {
      ViewportObserverDirective.observer.unobserve(target);
    });
  }
}
