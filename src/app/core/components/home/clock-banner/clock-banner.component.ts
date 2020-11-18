import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-banner',
  templateUrl: './clock-banner.component.html',
  styleUrls: ['./clock-banner.component.scss']
})
export class ClockBannerComponent implements OnInit {
  angle = 0;

  constructor() { }

  ngOnInit(): void {
    
    setInterval(() => {
      this.angle += 30;
    }, 1000);
  }
}
