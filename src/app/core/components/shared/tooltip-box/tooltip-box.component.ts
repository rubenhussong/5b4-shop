import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip-box',
  templateUrl: './tooltip-box.component.html',
  styleUrls: ['./tooltip-box.component.scss']
})
export class TooltipBoxComponent implements OnInit {
  @Input()
  activeText: string;

  constructor() { }

  ngOnInit(): void {
  }
  
}
