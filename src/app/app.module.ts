import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSliderModule } from '@angular/material/slider';
import { MatListModule } from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DishService } from './service/dish.service';
import { MenuComponent } from './menu/menu.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component'

import 'hammerjs';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
@NgModule({
  declarations: [AppComponent,MenuComponent, DishdetailComponent, HeaderComponent, FooterComponent],
  imports: [

  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatSliderModule,
    MatGridListModule,
    MatButtonModule,
    MatCardModule,
    FlexLayoutModule,
  ],
  providers: [DishService],
  bootstrap: [AppComponent],
})
export class AppModule {}
