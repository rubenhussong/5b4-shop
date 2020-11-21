import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { RouteScrollStateDirective } from '../../directives/route-scroll-state.directive';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  classVisibility = {
    "wordmark": "hidden",
    "bottle": "visible"
  }

  constructor(private router: Router) { }

  // Update visibility of whole menu bar on scoll
  @HostListener('window:scroll', ['$event']) onScrollEvent($event) {
    this.updateVisibility()
  }

  ngOnInit(): void {
    // Update visibility of menu bar and bottle on route change
    this.router.events
    .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event) => this.updateVisibility());
  }

  // Update visibility of wordmark and bottle
  private updateVisibility(): void {
    let wordmarkState = RouteScrollStateDirective.updatedState({
      actual: { url: this.router.url, scrollY: window.scrollY },
      rules: [{ url: "/", minThreshold: 0, maxThreshold: window.innerHeight * .9 }],
    })
    this.classVisibility.wordmark = wordmarkState ? "hidden" : "visible"
    
    let bottleState = RouteScrollStateDirective.updatedState({
      actual: { url: this.router.url, scrollY: window.scrollY },
      rules: [{ url: "/", minThreshold: window.innerHeight * .9 }],
    })
    this.classVisibility.bottle = bottleState ? "visible" : "hidden"
  }

  // Scroll to top when root page is active, else navigate to to root page
  navigateHome() {
    if (this.router.url === '/') {
      this.scrollTop()
    }
  }

  // Animate scroll to top of page
  scrollTop() {
    (
      function smoothscroll() {
        var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        var targetScroll = 0
        if (currentScroll > targetScroll) {
          let nextScroll = currentScroll - 4 + (targetScroll - currentScroll) / 12
          window.requestAnimationFrame(smoothscroll);
          window.scrollTo(0, nextScroll);
        }
      })();
  }
}
