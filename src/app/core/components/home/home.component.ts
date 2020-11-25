import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, HostBinding, HostListener, OnDestroy } from '@angular/core';
import { ANIMATION_DURATION_OUT, homeAnimations } from '../../config/animations';
import { ViewportObserverDirective } from '../../directives/viewport-observer.directive';
import { ScrollPositionRestorerService } from '../../services/scroll-position-restorer.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  styles: [':host { display: block }'],
  animations: [ homeAnimations ]
})
export class HomeComponent implements OnDestroy, AfterViewInit {
  @HostBinding('@pageAnimation') get initAnimation() { return }

  private url: string = "/"
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
  
  items = [
    { title: 'Slide 1' },
    { title: 'Slide 2' },
    { title: 'Slide 3' },
  ]

  carouselSlides = [
    {
      src: "./assets/img/5b4-bottle-snowy.jpg",
      alt: "5b4 Bottle Snowy"
    },
    {
      src: "./assets/img/5b4-bottle-sunset.jpg",
      alt: "5b4 Bottle Sunset"
    },
    {
      src: "./assets/img/5b4-bottle-woman-staring-longingly-into-the-distance.jpg",
      alt: "5b4 Bottle Woman"
    },
    {
      src: "./assets/img/5b4-bottle-leaves.jpg",
      alt: "5b4 Bottle Leaves"
    },
    {
      src: "./assets/img/5b4-bottle-snowy-mountains.jpg",
      alt: "5b4 Bottle Snowy Mountains"
    },
    {
      src: "./assets/img/5b4-bottle-summit.jpg",
      alt: "5b4 Bottle Summit"
    },
    {
      src: "./assets/img/5b4-bottle-dog.jpg",
      alt: "5b4 Bottle Dog"
    }
  ]

  bulletListItems = [
    "Seit 1950 produziert der Mensch weltweit etwa 8.300.000.000 Tonnen Plastik. Dies entspricht dem Gewicht von 22.432 Empire State Buildings! Davon wurden weniger als zehn Prozent recycelt.",
    "Kunststoff, der in der Natur landet, hat eine Haltbarkeit von mehreren hundert Jahren – aber wer weiß das schon genau. Langzeitstudien wird es wohl erst für unsere Ur-Ur-Ur-Enkel geben.",
    "Jährlich verenden tausende Tiere an den direkten oder indirekten Folgen von Plastikverschmutzung – von den zahlreichen Pflanzen ganz zu schweigen!"
  ]
}
