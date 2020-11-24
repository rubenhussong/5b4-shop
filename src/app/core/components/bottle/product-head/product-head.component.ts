import { AfterContentInit, AfterViewInit, Component } from '@angular/core';
import { ViewportObserverDirective } from 'src/app/core/directives/viewport-observer.directive';

@Component({
  selector: 'app-product-head',
  templateUrl: './product-head.component.html',
  styleUrls: ['./product-head.component.scss']
})
export class ProductHeadComponent implements AfterViewInit {

  detailCarouselSlides = [
    {
      src: "./assets/img/slider-bottle-comp.jpg",
      alt: "5b4 Bottle Composition"
    },
    {
      src: "./assets/img/slider-bottle-closeup.jpg",
      alt: "5b4 Bottle Close Up"
    },
    {
      src: "./assets/img/slider-bottle-packaging.jpg",
      alt: "5b4 Bottle Packaging"
    },
    {
      src: "./assets/img/slider-bottle-details.jpg",
      alt: "5b4 Bottle Details"
    },
    {
      src: "./assets/img/slider-bottle-poem.jpg",
      alt: "5b4 Bottle Poem"
    }
  ]

  constructor() { }
  
  ngAfterViewInit(): void {
    ViewportObserverDirective.observe();
  }

}
