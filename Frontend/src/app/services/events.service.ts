import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Events } from '../models/events.model';


@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private baseURL = "http://localhost:8087/event/events";
  private baseURL1 = "http://localhost:8087/event/addEvent";
  private baseURL2= "http://localhost:8087/event/eventByName";
  private baseURL3= "http://localhost:8087/event/deleteEvent";
  constructor(private httpClient: HttpClient) { }
  
  getAllEvents(): Observable<Events[]>{
    return this.httpClient.get<Events[]>(`${this.baseURL}`);
  }

  createEvents(events: Events): Observable<Object>{
    return this.httpClient.post(`${this.baseURL1}`, events,{responseType:'text'});
  }

  getEventByName(eventName: string): Observable<Events>{
    return this.httpClient.get<Events>(`${this.baseURL2}/${eventName}`);
  
  }
    deleteEvents(eventId:any): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL3}/${eventId}`);

  }

}
