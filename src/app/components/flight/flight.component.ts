import { Component, OnInit } from '@angular/core';
import { Flightmodel } from '../../models/flightmodel/flightmodel.model';
import { Flightservice } from '../../services/flightservice/flightservice.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit {

  flightmodel: Flightmodel={
    model:'',
    source:'',
    destination:'',
    capacity:''
   
  };
  submitted = false;
  constructor(private flightService: Flightservice) { }

  ngOnInit(): void {
  }

  saveFlight(): void {
    const data = {
      model: this.flightmodel.model,
      source: this.flightmodel.source,
      destination: this.flightmodel.destination,
      capacity:this.flightmodel.capacity
    };

    this.flightService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newFlightmodel(): void {
    this.submitted = false;
    this.flightmodel = {
      model:'',
      source: '',
      destination: '',
      capacity:''
      
    };
  }
  //searchFlight
}
