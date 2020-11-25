import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-width-carousel',
  templateUrl: './full-width-carousel.component.html',
  styleUrls: ['./full-width-carousel.component.scss']
})
export class FullWidthCarouselComponent {
  @Input() slides: Array<any>;

  config = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "swipeToSlide": true,
    "variableWidth": true,
    "focusOnSelect": true,
    "cssEase": 'ease-out',
    "speed": 500
  }
  
  constructor() {}
}