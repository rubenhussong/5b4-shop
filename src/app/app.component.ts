import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgcCookieConsentService, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent /*implements OnInit, OnDestroy*/ {
  title = '5b4 Shop';
  private statusChangeSubscription: Subscription;
  
  constructor(/*private ccService: NgcCookieConsentService*/) { }

  /*
  ngOnInit(): void {
    this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
      (event: NgcStatusChangeEvent) => {
        console.log(event)
      });
  }
  ngOnDestroy(): void {
    this.statusChangeSubscription.unsubscribe()
  }
  */

  /*
  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
  */
}