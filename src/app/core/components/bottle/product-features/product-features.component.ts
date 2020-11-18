import { Component, OnInit } from '@angular/core';
import { ViewportObserverDirective } from 'src/app/core/directives/viewport-observer.directive';

@Component({
  selector: 'app-product-features',
  templateUrl: './product-features.component.html',
  styleUrls: ['./product-features.component.scss']
})
export class ProductFeaturesComponent implements OnInit {

  bulletListItems = [
    "Die Neopren-Tasche hält warme Getränke länger warm und kalte kalt. Zusätzlich schützt sie Deine Flasche vor Flaschen.",
    "Unsere Reinigungsbürste – rat mal – macht blitzblank sauber! Pflege Deine Flasche, damit ihr dicke Freunde werdet.",
    "Mit der schicken Trageschlaufe hast du Deine Flasche immer im Griff. Außerdem ist sie abnehmbar. Wir planen in Zukunft unterschiedliche Bändchen anzubieten, damit Du Deine Flasche personalisieren kannst.",
    "Füll Dein Lieblingsobst oder -gemüse in deine Flasche. Das Fruchtsieb sorgt dafür, dass es dir nicht in den Hals rutscht.",
    "Nicht mehr ganz dicht? Dank der mitgelieferten Ersatzdichtung kannst du das einfach selbst beheben."
  ]

  constructor() { }

  ngOnInit(): void { }

}
