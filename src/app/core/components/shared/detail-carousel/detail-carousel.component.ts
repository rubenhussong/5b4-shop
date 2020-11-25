import { Component, Input, ViewChild } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';

@Component({
  selector: 'app-detail-carousel',
  templateUrl: './detail-carousel.component.html',
  styleUrls: ['./detail-carousel.component.scss']
})
export class DetailCarouselComponent {

  constructor() { }

  @Input()
  slides: Array<any>;

  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  next() { this.slickModal.slickNext(); }
  prev() { this.slickModal.slickPrev(); }

  carouselConfig = {
    "slidesToShow": 1,
    "slidesToScroll": 1,
    "accessibility": false,
    "draggable": false,
    "arrows": false,
    "easing": 'ease-out',
    "speed": 300,
    "touchMove": false,
    "limitPan": true
  };
}
