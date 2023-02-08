import { Component } from '@angular/core';
import { Events } from 'src/app/models/events.model';
import { Participation } from 'src/app/models/participation.model';
import { ParticipationService } from 'src/app/services/participation.service';
import { Player } from 'src/app/models/player.model';
import { EventsService } from 'src/app/services/events.service';
import { PlayerService } from 'src/app/services/player.service';
import { Sports } from 'src/app/models/sports.model';
import { SportsService } from 'src/app/services/sports.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-participation',
  templateUrl: './add-participation.component.html',
  styleUrls: ['./add-participation.component.css']
})
export class AddParticipationComponent {

  participation = new Participation();

  allPlayers : Player[] = [];

  player_id ?: number[] = [];
  
  allEvents:Events[]=[];
  event_id ?:number[]=[];
  allSports: Sports[]=[];
  sports_id?:number[]=[];
  participationService: any;


  constructor(private playerServer: PlayerService,private eventServer:EventsService,private sportsServer:SportsService,participationService:ParticipationService, private router: Router){

  }

  ngOnInit(){
   this.playerServer.getAllPlayers().subscribe(players=>{
    this.allPlayers = players;
    for(let player of players){
      this.player_id?.push(player.playerId)
    }
   console.log(this.player_id);
   })
   this.eventServer.getAllEvents().subscribe(events=>{
    this.allEvents=events;
    for(let event of events){
      this.event_id?.push(event.eventId)
    }
    console.log(this.event_id)
  })
    this.sportsServer.getAll().subscribe(sports=>{
    this.allSports=sports;
    for(let sport of sports){
      this.sports_id?.push(sport.sportsId)
    }
    console.log(this.sports_id)
  })

  
   
  
  }

  getPlayername(event: any){
    const selectedId = event.target.value;
    let currentPlayer = this.allPlayers.filter(el => el.playerId == selectedId);
    console.log(currentPlayer);
    this.participation.player_name = currentPlayer[0].playerName;
  }
  getEventname(event:any){
    const selectedId = event.target.value;
    let currentEvent = this.allEvents.filter(el => el.eventId == selectedId);
    console.log(currentEvent);
    this.participation.event_name = currentEvent[0].eventName;
  }
  getSportsname(event:any){
    const selectedId = event.target.value;
    let currentSports = this.allSports.filter(el => el.sportsId == selectedId);
    console.log(currentSports);
    this.participation.sports_name = currentSports[0].sportsName;
  }



  saveParticipation(){
    this.participationService.createParticipation(this.participation).subscribe( (data: any) =>{
      console.log(data);
      this.goToParticipationList();
    },
      (    error: any) => console.log(error));
  }

  goToParticipationList(){
    this.router.navigate(['/participation']);
  }
  
  onSubmit(){
    console.log(this.participation);
    this.saveParticipation();
  }
 


}
