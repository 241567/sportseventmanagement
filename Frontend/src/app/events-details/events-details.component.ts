import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Events } from '../models/events.model';
import { EventsService } from '../services/events.service';


@Component({
  selector: 'app-events-details',
  templateUrl: './events-details.component.html',
  styleUrls: ['./events-details.component.css']
})
export class EventsDetailsComponent implements OnInit{
  eventName:any;
  events: Events = new Events;
  constructor(private route: ActivatedRoute, private eventsService: EventsService) { }
  ngOnInit(): void {
    this.eventName= this.route.snapshot.params['eventName'];

    this.events = new Events();
    this.eventsService.getEventByName(this.eventName).subscribe( data => {
      this.events = data;
    });

}


}