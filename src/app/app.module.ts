import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './core/components/home/home.component';
import { BottleComponent } from './core/components/bottle/bottle.component';
import { HeaderComponent } from './core/components/header/header.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { ImprintComponent } from './core/components/imprint/imprint.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { PinchZoomModule } from 'src/lib/ivypinch_pro_ng8+/pinch-zoom.module';
import { TooltipBoxComponent } from './core/components/shared/tooltip-box/tooltip-box.component';
import { ScrollArrowComponent } from './core/components/shared/scroll-arrow/scroll-arrow.component';
import { RouteScrollStateDirective } from './core/directives/route-scroll-state.directive';
import { ViewportObserverDirective } from './core/directives/viewport-observer.directive';
import { FullWidthCarouselComponent } from './core/components/shared/full-width-carousel/full-width-carousel.component';
import { BulletListComponent } from './core/components/shared/bullet-list/bullet-list.component';
import { ClockBannerComponent } from './core/components/home/clock-banner/clock-banner.component';
import { DonationBannerComponent } from './core/components/home/donation-banner/donation-banner.component';
import { ProductHeadComponent } from './core/components/bottle/product-head/product-head.component';
import { ProductDetailsComponent } from './core/components/bottle/product-details/product-details.component';
import { ProductFeaturesComponent } from './core/components/bottle/product-features/product-features.component';
import { DetailCarouselComponent } from './core/components/shared/detail-carousel/detail-carousel.component';
import { CustomPinchZoomComponent } from './core/components/shared/detail-carousel/custom-pinch-zoom/custom-pinch-zoom.component';
import { NgcCookieConsentModule } from 'ngx-cookieconsent';
import { cookieConfig } from './core/config/cookieConsent';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BottleComponent,
    HeaderComponent,
    FooterComponent,
    ImprintComponent,
    TooltipBoxComponent,
    ScrollArrowComponent,
    RouteScrollStateDirective,
    ViewportObserverDirective,
    FullWidthCarouselComponent,
    BulletListComponent,
    ClockBannerComponent,
    DonationBannerComponent,
    ProductHeadComponent,
    ProductDetailsComponent,
    ProductFeaturesComponent,
    DetailCarouselComponent,
    CustomPinchZoomComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SlickCarouselModule,
    PinchZoomModule,
    NgcCookieConsentModule.forRoot(cookieConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }