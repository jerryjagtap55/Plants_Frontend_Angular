import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav'
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTreeModule } from '@angular/material/tree';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './component/navbar/navbar.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { AboutComponent } from './pages/about/about.component';
import { HeroComponent } from './component/hero/hero.component';
import { FooterComponent } from './component/footer/footer.component';
import { PrimaryButtonComponent } from './component/primary-button/primary-button.component';
import { NewsletterButtonComponent } from './component/newsletter-button/newsletter-button.component';
import { LogoComponent } from './component/logo/logo.component';
import { SpecialOffersComponent } from './sections/special-offers/special-offers.component';
import { ProductCardComponent } from './component/product-card/product-card.component';
import { ShopRowComponent } from './sections/shop-row/shop-row.component';
import { OverStoryComponent } from './sections/over-story/over-story.component';
import { GiftSecComponent } from './sections/gift-sec/gift-sec.component';
import { WhyUsComponent } from './sections/why-us/why-us.component';
import { BtnReadComponent } from './component/btn-read/btn-read.component';
import { ReviewComponent } from './component/review/review.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    AboutComponent,
    HeroComponent,
    FooterComponent,
    PrimaryButtonComponent,
    NewsletterButtonComponent,
    LogoComponent,
    SpecialOffersComponent,
    ProductCardComponent,
    ShopRowComponent,
    OverStoryComponent,
    GiftSecComponent,
    WhyUsComponent,
    BtnReadComponent,
    ReviewComponent,
    ProductPageComponent,
    ProductDetailPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatGridListModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatExpansionModule,
    MatTreeModule,
    MatListModule,
    MatToolbarModule,
    MatTableModule,
    MatBadgeModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
