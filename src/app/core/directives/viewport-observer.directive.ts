import { Directive } from '@angular/core';

@Directive({
  selector: '[appViewportObserver]'
})
export class ViewportObserverDirective {

  constructor() { }

  // Observes all elements with class "show-on-scroll" in embedding module.
  // Adds 'under-viewport' and 'over-viewport' classes to those elements.
  // These can be used to add different styles in scss depending on the state.
  static observe(): void {
    const callback = function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('under-viewport')
          entry.target.classList.remove('over-viewport')
        } else if (isOverViewportCenterX(entry)) {
          entry.target.classList.remove('under-viewport')
          entry.target.classList.add('over-viewport')
        } else {
          entry.target.classList.add('under-viewport')
          entry.target.classList.remove('over-viewport')
        }
      });
    };

    function isOverViewportCenterX(entry) {

      let viewportCenterX
      if (entry.rootBounds !== null) {
        viewportCenterX = entry.rootBounds.height / 2
      } else {
        viewportCenterX = 400
      }

      return (entry.boundingClientRect.bottom < viewportCenterX)
    }

    const observer = new IntersectionObserver(callback);

    const targets = document.querySelectorAll(".show-on-scroll");
    targets.forEach(function (target) {
      observer.observe(target);
    });
  }
}
