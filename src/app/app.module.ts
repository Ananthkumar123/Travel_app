import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AnimatedTitleComponent } from './animated-title/animated-title.component';
import { BookComponent } from './components/book/book.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }  from '@angular/common/http';
import { GetdataComponent } from './components/getdata/getdata.component';
import { TripsComponent } from './components/trips/trips.component';
import { DealsComponent } from './components/deals/deals.component';
 

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AnimatedTitleComponent,
    BookComponent,
    PagenotfoundComponent,
    HomeComponent,
    FormComponent,
    GetdataComponent,
    TripsComponent,
    DealsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
   

  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
