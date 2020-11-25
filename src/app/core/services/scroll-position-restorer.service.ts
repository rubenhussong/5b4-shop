import { ViewportScroller } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrollPositionRestorerService {
  private map: any = {}

  constructor() {
  }

  // sets or assignes
  store(url: string, scrollPosition: [number, number]): void {
    this.map[url] = scrollPosition
  }

  // Restores the ViewportScroller to the given Scroll Position
  // The timeout sets a delay to give the leaving page time to animate.
  restore(url: string, viewportScroller: ViewportScroller, delay: number): void {
    setTimeout(function() {
      viewportScroller.scrollToPosition(this.get(url))
    }.bind(this), delay | 0)
  }

  // gets (stores [0, 0] before if no last position available)
  private get(url: string): [number, number] {
    if (!this.contains(url)) this.store(url, [0, 0])
    return this.map[url]
  }

  // checks if assigned
  private contains(url: string): boolean {
    return this.map[url] !== undefined
  }
}

/* ========== Readme

To use this Service for restoring the last Scroll Position:


1 Set the animation duration for your page animations. For me its set in animations.ts


2 implement these Angular inbuilt services in all pages:
    
    implements OnDestroy, AfterViewInit

    
3 Call the following methods:
  (Important: Raplace the url attribute for every page by a unique ID.)

  private scrollPosition: [number, number]
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.scrollPosition = this.viewportScroller.getScrollPosition()
  }
  ngOnDestroy(): void {
    this.scrollPositionRestorer.store(this.url, this.scrollPosition)
  }
  ngAfterViewInit(): void {
    this.scrollPositionRestorer.restore(this.url, this.viewportScroller)
  }

*/