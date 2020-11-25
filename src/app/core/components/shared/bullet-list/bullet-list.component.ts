import { AfterViewInit, Component, Input } from '@angular/core';

@Component({
  selector: 'app-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrls: ['./bullet-list.component.scss']
})
export class BulletListComponent {
  @Input()
  listItems: Array<string>;

  constructor() { }

}
