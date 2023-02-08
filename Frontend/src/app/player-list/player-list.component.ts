import { Component,OnInit } from '@angular/core';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit{
  players:Player[]=[];
  constructor(private playersService: PlayerService,
    private router: Router) { }
    ngOnInit(): void {
      this.getPlayers();
    }
  
    private getPlayers(){
      this.playersService.getAllPlayers().subscribe(data => {
        this.players = data;
      });
    }
    deletePlayer(playerId:any){
      this.playersService.deletePlayer(playerId).subscribe( data => {
        console.log(data);
        this.getPlayers();
      })
    }
      refresh(){
        window.location.reload();
      }
    }
    


