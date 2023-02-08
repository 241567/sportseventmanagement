import { Injectable,OnInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Participation } from '../models/participation.model';
import { Router } from '@angular/router';

//const baseUrl = 'http://localhost:8089/participation/';
//const baseUrl1='http://localhost:8089/participation/addparticipation';
//const baseUrl2='http://localhost:8089/participation/updateStatus'

@Injectable({
  providedIn: 'root'
})
export class ParticipationService {
   baseUrl = 'http://localhost:8089/participation/getParticipations';
   baseUrl1='http://localhost:8089/participation/addparticipation';


  constructor(private httpClient: HttpClient, private router: Router) { }
  getParticipationList(): Observable<Participation[]>{
    return this.httpClient.get<Participation[]>(`${this.baseUrl}`);
  }

  createParticipation(participation:Participation): Observable<Object>{
    return this.httpClient.post(`${this.baseUrl1}`,participation,{responseType:'text'});
  }


}
