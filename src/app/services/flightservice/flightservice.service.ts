import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flightmodel } from '../../models/flightmodel/flightmodel.model';


const baseUrl = 'http://localhost:54228/v1/api/flight';

@Injectable({
    providedIn: 'root'
  })

  export class Flightservice {

    constructor(private http: HttpClient) { }

  getAll(): Observable<Flightmodel[]> {
    return this.http.get<Flightmodel[]>(baseUrl);
  }

  get(flightid: any): Observable<Flightmodel> {
    return this.http.get(`${baseUrl}/${flightid}`);
  }
  create(data: Flightmodel): Observable<any> {
    //const body=JSON.stringify(data);
    console.log(data);
    return this.http.post(baseUrl, data);
  }

  update(flightid: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${flightid}`, data);
  }

  delete(flightid: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${flightid}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findBySource(source: string, destination: string): Observable<Flightmodel[]> {
    return this.http.get<Flightmodel[]>(`${baseUrl}/getFlightBySrcAndDesti/?source=${source}&destination=${destination}`);
  }
  }