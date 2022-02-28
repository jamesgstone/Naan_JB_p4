import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { RightMComponent } from './components/right-m/right-m.component';
import { MiddleMComponent } from './components/middle-m/middle-m.component';
import { LeftMComponent } from './components/left-m/left-m.component';
import { SiteInfoComponent } from './components/site-info/site-info.component';
import { SitePromotionalComponent } from './components/site-promotional/site-promotional.component';
import { MyCartComponent } from './components/my-cart/my-cart.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { ProductsComponent } from './components/products/products.component';
import { OrderComponent } from './components/order/order.component';
import { ProductComponent } from './components/product/product.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogInComponent,
    RegisterComponent,
    RightMComponent,
    MiddleMComponent,
    LeftMComponent,
    SiteInfoComponent,
    SitePromotionalComponent,
    MyCartComponent,
    CategoriesComponent,
    ProductsComponent,
    OrderComponent,
    ProductComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
