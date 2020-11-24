import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-bottle',
  templateUrl: './button-bottle.component.html',
  styleUrls: ['./button-bottle.component.scss']
})
export class ButtonBottleComponent implements OnInit {
  angle: number = 0
  interval: any

  constructor() { }

  ngOnInit(): void {
    //this.tick()
  }

  ticking(running: boolean) {
    if (running) {
      this.interval = setInterval(() => this.angle += 30, 1000)
    } else {
      if (this.interval) {
        clearInterval(this.interval);
      }
    }
  }
}
