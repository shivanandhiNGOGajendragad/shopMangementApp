import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ShoppingService } from 'src/services/services.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './landing/details/details.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ShoppingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
