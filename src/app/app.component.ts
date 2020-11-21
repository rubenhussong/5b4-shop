import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { slideInAnimation } from './core/config/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AppComponent {
  title = '5b4 Shop';
  
  constructor(private ccService: NgcCookieConsentService) { }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}