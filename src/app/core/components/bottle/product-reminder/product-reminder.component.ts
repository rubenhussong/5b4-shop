import { Component, OnInit } from '@angular/core';
import { ViewportObserverDirective } from 'src/app/core/directives/viewport-observer.directive';

@Component({
  selector: 'app-product-reminder',
  templateUrl: './product-reminder.component.html',
  styleUrls: ['./product-reminder.component.scss']
})
export class ProductReminderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    //ViewportObserverDirective.observe()
  }

}
