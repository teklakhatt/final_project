import { NgModule } from '@angular/core';
import { TestComponentRenderer } from '@angular/core/testing';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { Footer1Component } from './footer1/footer1.component';

import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { Home1Component } from './home1/home1.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { Page2Component } from './page2/page2.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent },

  { path: 'introduction', component: IntroductionComponent },
  { path: 'page2', component: Page2Component },
  { path: 'gallery', component: GalleryComponent },
  { path: 'test', component: TestComponent },
  { path: 'learnmore', component: LearnmoreComponent },
  { path: 'footer1', component: Footer1Component },
  { path: 'home1', component: Home1Component},

    

];
const routerOptions: ExtraOptions = {
  useHash: false,
  anchorScrolling: 'enabled',
  scrollPositionRestoration: 'enabled',
  scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes,routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
