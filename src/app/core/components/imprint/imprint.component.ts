import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, HostBinding, OnDestroy } from '@angular/core';
import { imprintAnimations } from '../../config/animations';
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
  
  ngOnDestroy(): void {
    ViewportObserverDirective.unobserve()
    this.scrollPositionRestorer.set(this.url, this.viewportScroller.getScrollPosition())
  }
  ngAfterViewInit(): void {
    this.scrollPositionRestorer.restore(this.url, this.viewportScroller)
    ViewportObserverDirective.observe()
  }

}
