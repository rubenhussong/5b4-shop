import { Component, OnInit } from '@angular/core';
import { ViewportObserverDirective } from 'src/app/core/directives/viewport-observer.directive';

@Component({
  selector: 'app-button-buy',
  templateUrl: './button-buy.component.html',
  styleUrls: ['./button-buy.component.scss']
})
export class ButtonBuyComponent implements OnInit {
  logo = {
    angle: 0
  }
  wheel = {
    angle: -22.5
  }

  constructor() { }

  ngOnInit(): void {
    ViewportObserverDirective.observe();
  }

  ticking(running: boolean) {
    if (running) {
      this.logo["interval"] = setInterval(() => this.logo.angle += 30, 1000)
      this.wheel["interval"] = setInterval(() => this.wheel.angle += 11, 20)
    } else {
      if (this.logo["interval"]) {
        clearInterval(this.logo["interval"]);
        clearInterval(this.wheel["interval"]);
        this.wheel.angle = this.wheel.angle - (this.wheel.angle) % 45 - 22.5
      }
    }
  }
}
