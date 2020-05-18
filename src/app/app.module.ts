import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BarLeftComponent } from './components/bar-left/bar-left.component';
import { BarRightComponent } from './components/bar-right/bar-right.component';
import { HomeComponent } from './components/home/home.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { PublicacionComponent } from './components/publicacion/publicacion.component';
import { FormsModule } from '@angular/forms';
import { MapsComponent } from './components/maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NavbarComponent,
    BarLeftComponent,
    BarRightComponent,
    HomeComponent,
    PublicacionComponent,
    MapsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
