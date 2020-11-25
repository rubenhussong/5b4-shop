import { Component } from '@angular/core';

@Component({
  selector: 'app-product-features',
  templateUrl: './product-features.component.html',
  styleUrls: ['./product-features.component.scss']
})
export class ProductFeaturesComponent {

  bulletListItems = [
    "Die Neopren-Tasche hält warme Getränke länger warm und kalte kalt. Zusätzlich schützt sie Deine Flasche vor Flaschen.",
    "Unsere Klo ... äh Reinigungsbürste macht Deine Flasche blitzblank sauber! Pflege sie, damit ihr dicke Freunde werdet.",
    "Mit der schicken Trageschlaufe hast Du Deine Flasche immer im Griff. Außerdem ist sie abnehmbar. Wir planen in Zukunft unterschiedliche Bändchen anzubieten, damit Du Deine Flasche personalisieren kannst.",
    "Steck Dein Lieblingsobst oder -gemüse in Deine Flasche. Das Fruchtsieb sorgt dafür, dass es dir nicht in den Hals rutscht.",
    "Nicht mehr ganz dicht? Dank der mitgelieferten Ersatzdichtung kannst Du das einfach selbst beheben."
  ]

  constructor() { }

}
