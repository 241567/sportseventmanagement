import { Injectable, } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Player} from '../models/player.model';


@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private baseURL5 = "http://localhost:8088/player/players";
  private baseURL6 = "http://localhost:8088/player/addPlayer";
  private baseURL7 = "http://localhost:8088/player/deletePlayer";
  

  constructor(private httpClient: HttpClient) { }
  getAllPlayers(): Observable<Player[]>{
    return this.httpClient.get<Player[]>(`${this.baseURL5}`);
  }

  createPlayer(players: Player): Observable<Object>{
    return this.httpClient.post(`${this.baseURL6}`,players,{responseType:'text'});
  }
  deletePlayer(playerId: any): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL7}/${playerId}`);
  }

}
