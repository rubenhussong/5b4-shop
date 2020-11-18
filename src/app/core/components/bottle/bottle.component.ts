import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottle',
  templateUrl: './bottle.component.html',
  styleUrls: ['./bottle.component.scss']
})
export class BottleComponent implements OnInit {

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
  
  constructor() { }

  ngOnInit(): void {
  }

}
