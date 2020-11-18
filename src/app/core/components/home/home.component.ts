import { Component, OnInit } from '@angular/core';
import { ViewportObserverDirective } from '../../directives/viewport-observer.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
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

  constructor() { }

  ngOnInit(): void {
    ViewportObserverDirective.observe();
  }

}
