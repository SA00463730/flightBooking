import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { FlightComponent } from './components/flight/flight.component';
import { HomeComponent } from './components/home/home.component';
import { HotelComponent } from './components/hotel/hotel.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

const routes:Routes = [
  {path: "home", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "flight", component: FlightComponent},
  {path: "hotel", component: HotelComponent},
  {path: "contactus", component: ContactusComponent},
  {path: "about", component: AboutComponent},


  {path: "**", redirectTo: "home"}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FlightComponent,
    LoginComponent,
    HotelComponent,
    AboutComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

