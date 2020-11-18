import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouteScrollStateDirective } from 'src/app/core/directives/route-scroll-state.directive';

@Component({
  selector: 'app-scroll-arrow',
  templateUrl: './scroll-arrow.component.html',
  styleUrls: ['./scroll-arrow.component.scss']
})
export class ScrollArrowComponent implements OnInit {
  classVisibility = 'hidden';
  scrollMaxThreshold = 200;

  constructor(private router: Router) { }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.updateVisibility()
  }

  ngOnInit(): void {
    this.router.events.pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => {
        this.updateVisibility()
      });
  }

  private updateVisibility(): void {
    let state = RouteScrollStateDirective.updatedState({
      actual: { url: this.router.url, scrollY: window.scrollY },
      rules: [{ url: "/", minThreshold: 0, maxThreshold: this.scrollMaxThreshold }],
    })
    this.classVisibility = state ? "visible" : "hidden"
  }

  scrollDown() {
    (function smoothscroll() {
      var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
      var targetScroll = window.innerHeight
      if (currentScroll < targetScroll) {
        let nextScroll = currentScroll + 4 + (targetScroll - currentScroll) / 12
        window.requestAnimationFrame(smoothscroll);
        window.scrollTo(0, nextScroll);
      }
    })();
  }

}
