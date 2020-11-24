import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, HostBinding, OnDestroy } from '@angular/core';
import { bottleAnimations } from '../../config/animations';
import { ViewportObserverDirective } from '../../directives/viewport-observer.directive';
import { ScrollPositionRestorerService } from '../../services/scroll-position-restorer.service';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.component.html',
  styleUrls: ['./bottle.component.scss'],
  styles: [':host { display: block }'],
  animations: [ bottleAnimations ]
})
export class BottleComponent implements OnDestroy, AfterViewInit {
  @HostBinding('@pageAnimation') get initAnimation() { return }
  
  private url = "/bottle"
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

  fullWidthCarouselSlides = [
    {
      src: "./assets/img/5b4-bottle-treestump.jpg",
      alt: "5b4 Bottle Treestump"
    },
    {
      src: "./assets/img/5b4-bottle-grass.jpg",
      alt: "5b4 Bottle Grass"
    },
    {
      src: "./assets/img/5b4-bottle-droplets.jpg",
      alt: "5b4 Bottle Droplets"
    },
    {
      src: "./assets/img/5b4-bottle-dew.jpg",
      alt: "5b4 Bottle Dew"
    },
    {
      src: "./assets/img/5b4-bottle-stairs.jpg",
      alt: "5b4 Bottle Stairs"
    },
    {
      src: "./assets/img/5b4-bottle-concrete.jpg",
      alt: "5b4 Bottle Concrete"
    },
    {
      src: "./assets/img/5b4-bottle-moss.jpg",
      alt: "5b4 Bottle Moss"
    }
  ]
}
