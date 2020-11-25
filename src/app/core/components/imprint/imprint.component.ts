import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, HostBinding, HostListener, OnDestroy } from '@angular/core';
import { ANIMATION_DURATION_OUT, imprintAnimations } from '../../config/animations';
import { ViewportObserverDirective } from '../../directives/viewport-observer.directive';
import { ScrollPositionRestorerService } from '../../services/scroll-position-restorer.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
  styles: [':host { display: block }'],
  animations: [ imprintAnimations ]
})
export class ImprintComponent implements OnDestroy, AfterViewInit {
  @HostBinding('@pageAnimation') get initAnimation() { return }

  private url: string = "/imprint"
  constructor(
    private scrollPositionRestorer: ScrollPositionRestorerService, 
    private viewportScroller: ViewportScroller
  ) { }

  /* ScrollPositionRestorer (& ViewportObserver) */
  private scrollPosition: [number, number]
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.scrollPosition = this.viewportScroller.getScrollPosition()
  }
  ngOnDestroy(): void {
    ViewportObserverDirective.unobserve()
    this.scrollPositionRestorer.store(this.url, this.scrollPosition)
  }
  ngAfterViewInit(): void {
    this.scrollPositionRestorer.restore(this.url, this.viewportScroller, ANIMATION_DURATION_OUT | 0)
    ViewportObserverDirective.observe(ANIMATION_DURATION_OUT | 0)
  }
  /* End ScrollPositionRestorer */

}
