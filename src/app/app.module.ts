import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { IvyGalleryModule } from 'angular-gallery';
import { HeaderComponent } from './header/header.component';

import { IntroductionComponent } from './introduction/introduction.component';
import { HomeComponent } from './home/home.component';
import { Page2Component } from './page2/page2.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TestComponent } from './test/test.component';
import { LearnmoreComponent } from './learnmore/learnmore.component';
import { Footer1Component } from './footer1/footer1.component';
import { Home1Component } from './home1/home1.component';




@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,

    IntroductionComponent,
    HomeComponent,
    Page2Component,
    GalleryComponent,
    TestComponent,
    LearnmoreComponent,
    Footer1Component,
    Home1Component,

    
  
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    IvyGalleryModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
