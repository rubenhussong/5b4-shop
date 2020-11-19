import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BottleComponent } from './core/components/bottle/bottle.component';
import { HomeComponent } from './core/components/home/home.component';
import { ImprintComponent } from './core/components/imprint/imprint.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'Home'} },
  { path: 'flasche', component: BottleComponent, data: {animation: 'Bottle'} },
  { path: 'impressum', component: ImprintComponent, data: {animation: 'Imprint'} }
];

const ROUTES_CONFIG = {
  scrollPositionRestoration: "enabled"
}

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {
    scrollPositionRestoration: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
