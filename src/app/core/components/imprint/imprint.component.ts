import { ViewportScroller } from '@angular/common';
import { AfterViewInit, Component, HostBinding, HostListener, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ANIMATION_DURATION_OUT, imprintAnimations } from '../../config/animations';
import { ViewportObserverDirective } from '../../directives/viewport-observer.directive';
import { ScrollPositionRestorerService } from '../../services/scroll-position-restorer.service';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
  styles: [':host { display: block }'],
  animations: [imprintAnimations]
})
export class ImprintComponent implements OnDestroy, AfterViewInit, OnInit {
  @HostBinding('@pageAnimation') get initAnimation() { return }

  private url: string = "/imprint"
  constructor(
    private scrollPositionRestorer: ScrollPositionRestorerService,
    private viewportScroller: ViewportScroller
  ) { }
  ngOnInit(): void {
    /*
    <!-- Cookiebot Declaration -->
    <script id="CookieDeclaration" src="https://consent.cookiebot.com/9f00bb9c-5c8b-42c6-88fe-9c8e4a38d7e0/cd.js"
        type="text/javascript" async></script>
    <!-- End Cookiebot Declaration -->
    
    */
  }

  loadCookieBotScript() {
    const dynamicScripts = ['https://consent.cookiebot.com/9f00bb9c-5c8b-42c6-88fe-9c8e4a38d7e0/cd.js'];
    for (let i = 0; i < dynamicScripts.length; i++) {
      const node = document.createElement('script');
      node.src = dynamicScripts[i];
      node.type = 'text/javascript';
      node.async = true;
      node.id = "CookieDeclaration"
      document.getElementsByTagName('cookie-declaration-wrapper')[0].appendChild(node);
    }
  }

  /* ScrollPositionRestorer (& ViewportObserver) */
  private scrollPosition: [number, number]
  @HostListener('window:scroll', ['$event']) onScroll(event) {
    this.scrollPosition = this.viewportScroller.getScrollPosition()
  }
  ngOnDestroy(): void {
    ViewportObserverDirective.unobserve()
    this.scrollPositionRestorer.store(this.url, this.scrollPosition)
  }
  ngAfterViewInit(): void {
    this.scrollPositionRestorer.restore(this.url, this.viewportScroller, ANIMATION_DURATION_OUT | 0)
    ViewportObserverDirective.observe(ANIMATION_DURATION_OUT | 0)
  }
  /* End ScrollPositionRestorer */

}
