import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ticketmodel } from '../../models/ticketmodel/ticketmodel.model';


const baseUrl = 'http://localhost:54228/v1/api/user';

@Injectable({
    providedIn: 'root'
  })

  export class Userservice {

    constructor(private http: HttpClient) { }

  getAll(): Observable<Ticketmodel[]> {
    return this.http.get<Ticketmodel[]>(baseUrl);
  }

  get(flightid: any): Observable<Ticketmodel> {
    return this.http.get(`${baseUrl}/${bookingId}`);
  }
  create(data: Ticketmodel): Observable<any> {
    //const body=JSON.stringify(data);
    console.log(data);
    return this.http.post(baseUrl, data);
  }

  update(bookingId: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${bookingId}`, data);
  }

  delete(bookingId: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${bookingId}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  }