import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-custom-pinch-zoom',
  templateUrl: './custom-pinch-zoom.component.html',
  styleUrls: ['./custom-pinch-zoom.component.scss']
})
export class CustomPinchZoomComponent implements OnInit {
  @Input()
  slide: any;

  constructor() { }

  ngOnInit(): void {
    if (this.slide["fullImage"] !== undefined) {
      this.pinchZoomConfig["fullImage"] = { path: this.slide.fullImage, minScale: 2 }
    }
  }

  pinchZoomConfig = {
    "transition-duration": 300,
    "disableZoomControl": "disable", // disables zoom button
    "limit-pan": true, // prevents from beeing panned over the edge
    "minScale": 1, // prevents image from getting smaller than default size
    "double-tap": false, // no zoom on double tap
    "draggableImage": false,
    "wheelZoomFactor": .5,
    "limit-zoom": 5,
    "backgroundColor": "#fff"
  }

  @ViewChild('thisPinch', { static: false }) pinch;

  zoomIn() {
    this.pinch.setZoom({ scale: 2 });
  }
  zoomOut() {
    this.pinch.reset()
  }
}
