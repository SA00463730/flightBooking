import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BookComponent } from './components/flight/flight.component';
import { LoginComponent } from './components/login/login.component';
import { HotelComponent } from './components/hotel/hotel.component';


const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "book", component: BookComponent},
  {path: "login", component: LoginComponent},
  {path: "hotel", component: HotelComponent},

  {path: "**", redirectTo: "home"}
];

@NgModule({
  declarations: [
    HomeComponent,
    BookComponent,
    LoginComponent,
    HotelComponent
  ],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
