import { Component,OnInit} from '@angular/core';
import { Events } from '../models/events.model';
import { EventsService } from '../services/events.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.css']
})
export class EventsListComponent implements OnInit {

  events:Events[]=[];
  constructor(private eventsService: EventsService,
    private router: Router) { }

    ngOnInit(): void {
      this.getEvents();
    }
  
    private getEvents(){
      this.eventsService.getAllEvents().subscribe(data => {
        this.events = data;
      });
    }
    eventsDetails(eventName: any){
      this.router.navigate(['events-details', eventName]);
    }

    deleteEvents(eventId: any){
      this.eventsService.deleteEvents(eventId).subscribe( data => {
        console.log(data);
        this.getEvents();
      })
}

refresh(){
  window.location.reload();
}
}
