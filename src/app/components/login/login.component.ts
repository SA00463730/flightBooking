import { Component, OnInit } from '@angular/core';
import { Flightmodel } from 'src/app/models/flightmodel/flightmodel.model';
import { Flightservice } from 'src/app/services/flightservice/flightservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  flights?: Flightmodel[];
  currentFlight: Flightmodel = {};
  currentIndex = -1;
  source = '';
  destination='';

  columns = ["Flight Id","Model","Source", "Destination", "Capacity"];
  index = ["fight_id", "model", "source", "destination", "capacity"];

  constructor(private flightService: Flightservice) { }

  ngOnInit(): void {
    this.retrieveFlights();
  }
  retrieveFlights(): void {
    this.flightService.getAll()
      .subscribe(
        data => {
          this.flights = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  refreshList(): void {
    this.retrieveFlights();
    this.currentFlight = {};
    this.currentIndex = -1;
  }

  setActiveFlight(flightModel: Flightmodel, index: number): void {
    this.currentFlight = flightModel;
    this.currentIndex = index;
  }

  removeAllFlights(): void {
    this.flightService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchSource(): void {
    this.currentFlight = {};
    this.currentIndex = -1;

    this.flightService.findBySource(this.source,this.destination)
      .subscribe(
        data => {
          this.flights = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  

}
