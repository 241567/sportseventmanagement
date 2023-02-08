import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Sports } from '../models/sports.model';

@Injectable({
  providedIn: 'root'
})
export class SharedServicesService {
  
  constructor(private http:HttpClient) { }
  get(sportsId: any): Observable<Sports> {
    return this.http.get<Sports>(`${"http://localhost:8087/sport/getSportsById/"}/${ sportsId}`);
  }



  }


