import { Component, Input, OnInit } from '@angular/core';
import { ViewportObserverDirective } from 'src/app/core/directives/viewport-observer.directive';

@Component({
  selector: 'app-full-width-carousel',
  templateUrl: './full-width-carousel.component.html',
  styleUrls: ['./full-width-carousel.component.scss']
})
export class FullWidthCarouselComponent implements OnInit {
  @Input()
  slides: Array<any>;

  config = {
    "slidesToShow": 2,
    "slidesToScroll": 1,
    "swipeToSlide": true,
    "variableWidth": true,
    "focusOnSelect": true,
    "cssEase": 'ease-out',
    "speed": 500
  };

  constructor() {
  }

  ngOnInit(): void {
    ViewportObserverDirective.observe();
  }

}
