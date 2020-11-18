import { Component, OnInit } from '@angular/core';
import { ViewportObserverDirective } from 'src/app/core/directives/viewport-observer.directive';

@Component({
  selector: 'app-donation-banner',
  templateUrl: './donation-banner.component.html',
  styleUrls: ['./donation-banner.component.scss']
})
export class DonationBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    ViewportObserverDirective.observe();
  }

}
