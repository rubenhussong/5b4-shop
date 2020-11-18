import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ViewportObserverDirective } from 'src/app/core/directives/viewport-observer.directive';

@Component({
  selector: 'app-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrls: ['./bullet-list.component.scss']
})
export class BulletListComponent implements AfterViewInit {
  @Input()
  listItems: Array<string>;

  constructor() { }

  ngAfterViewInit(): void {
    ViewportObserverDirective.observe()
  }

}
