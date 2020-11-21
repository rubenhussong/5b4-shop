import { Component, OnInit } from '@angular/core';
import { ViewportObserverDirective } from 'src/app/core/directives/viewport-observer.directive';

@Component({
  selector: 'app-button-buy',
  templateUrl: './button-buy.component.html',
  styleUrls: ['./button-buy.component.scss']
})
export class ButtonBuyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ViewportObserverDirective.observe();
  }

}
