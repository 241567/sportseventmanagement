import { Injectable, Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Sports } from '../models/sports.model';


@Injectable({
  providedIn: 'root'
})
export class SportsService {
  constructor(private http: HttpClient) { }
    

  getAll(): Observable<Sports[]> {
  
    return this.http.get<Sports[]>("http://localhost:8087/sport/sports");
    
  }

  get(sportsId: any): Observable<Sports> {
    return this.http.get<Sports>(`${"http://localhost:8087/sport/getSportsById/"}/${ sportsId}`);
  }
  create(data: any): Observable<any> {
    return this.http.post("http://localhost:8087/sport/addSports", data,{responseType:'text'});
  }
  getSportsByName(sportsName:string): Observable<Sports[]> {
   
    return this.http.get<Sports[]>('http://localhost:8087/sport/getSportsByName/'+sportsName);
  }
}
