import { Component } from '@angular/core';
import { BOTTLE_DETAILS } from 'src/app/core/config/config';

@Component({
  selector: 'app-product-head',
  templateUrl: './product-head.component.html',
  styleUrls: ['./product-head.component.scss']
})
export class ProductHeadComponent {
  bottleDetails = BOTTLE_DETAILS

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

}
