import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { filter } from 'rxjs/operators';
import { pageTransitionAnimation } from './core/config/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    pageTransitionAnimation
  ]
})
export class AppComponent {
  title = '5b4 Shop';
  
  constructor(private ccService: NgcCookieConsentService) {
    //private router: Router
    //this.routeToPageTop(this.router)
  }
 
  routeToPageTop(router: Router) {
    router.events
    .pipe(filter(event => event instanceof NavigationEnd))
    .subscribe((evt) => {
      window.scrollTo(0, 0)
    });
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }
}