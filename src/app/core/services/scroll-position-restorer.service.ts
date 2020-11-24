import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';
import { ANIMATION_DURATION } from '../config/animations';

@Injectable({
  providedIn: 'root'
})
export class ScrollPositionRestorerService {
  private map: any = {}

  constructor() {
  }

  // sets or assignes
  set(url: string, scrollPosition: [number, number]): void {
    this.map[url] = scrollPosition
  }

  // gets (assigns [0, 0] before if not available)
  get(url: string): [number, number] {
    if (!this.has(url)) this.set(url, [0, 0])
    return this.map[url]
  }

  // checks if assigned
  has(url: string): boolean {
    return this.map[url] !== undefined
  }

  // Restores the ViewportScroller to the given Scroll Position
  // The timeout sets a delay to give the leaving page time to aimate.
  restore(url: string, viewportScroller: ViewportScroller): void {
    setTimeout(function() {
      viewportScroller.scrollToPosition(this.get(url))
    }.bind(this), ANIMATION_DURATION | 0)
  }
}

/* D O C

To use this Service for restoring the last Scroll Position:

1 Set the animation duration for your page animations. For me its set in animations.ts

2 implement these Angular inbuilt services in all pages:
    
    implements OnInit, OnDestroy, AfterViewInit

3 Call the following methods:
  (Important: Raplace the url attribute for every page by a unique ID.)

  private url: string = "UNIQUE_URL"
  constructor(
    private scrollPositionRestorer: ScrollPositionRestorerService,
    private viewportScroller: ViewportScroller
  ) { }
  ngOnInit(): void {
    this.scrollPositionRestorer.restore(this.url, this.viewportScroller)
  }
  ngOnDestroy(): void {
    ViewportObserverDirective.unobserve()
    this.scrollPositionRestorer.set(this.url, this.viewportScroller.getScrollPosition())
  }
  ngAfterViewInit(): void {
    ViewportObserverDirective.observe()
  }

*/