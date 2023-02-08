import { Component,OnInit} from '@angular/core';
import { Player } from '../models/player.model';
import { PlayerService } from '../services/player.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-player',
  templateUrl: './create-player.component.html',
  styleUrls: ['./create-player.component.css']
})
export class CreatePlayerComponent implements OnInit {

  players: Player = new Player();
  constructor(private playersService: PlayerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  savePlayer(){
    this.playersService.createPlayer(this.players).subscribe( data =>{
      console.log(data);
      this.goToPlayerList();
    },
    error => console.log(error));
  }

  goToPlayerList(){
    this.router.navigate(['/player']);
  }
  
  onSubmit(){
    console.log(this.players);
    this.savePlayer();
  }









}
