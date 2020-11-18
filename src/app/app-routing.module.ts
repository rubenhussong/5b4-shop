import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BottleComponent } from './core/components/bottle/bottle.component';
import { HomeComponent } from './core/components/home/home.component';
import { ImprintComponent } from './core/components/imprint/imprint.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: {animation: 'Home'} },
  { path: 'flasche', component: BottleComponent, data: {animation: 'Bottle'} },
  { path: 'impressum', component: ImprintComponent, data: {animation: 'Imprint'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
