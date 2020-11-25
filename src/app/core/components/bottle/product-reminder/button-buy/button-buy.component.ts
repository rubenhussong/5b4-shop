import { Component } from '@angular/core';

@Component({
  selector: 'app-button-buy',
  templateUrl: './button-buy.component.html',
  styleUrls: ['./button-buy.component.scss']
})
export class ButtonBuyComponent {
  logo: any = {
    angle: 0
  }
  wheel: any = {
    angle: -22.5
  }

  constructor() { }

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
